//
// modelController.js
//


import Variables from './common/variables.js';
import Observer from './common/observer.js';

import Process from './Model/process.js';
import Task from './Model/task.js';

export default class ModelController {

  constructor() {
    this.time = 1000;
    this.processors = [];
    this.processors.push(new Process('1', 100));
    this.processors.push(new Process('2', 80));
    this.processors.push(new Process('3', 60));
    this.processors.push(new Process('4', 40));
    this.carriage([
      new Task('1', 200),
      new Task('2', 150),
      new Task('3', 300),
      new Task('4', 100),
      new Task('5', 50),
      new Task('6', 250),
      new Task('7', 100),
      new Task('8', 200),
      new Task('9', 500),
    ]);
  }

  carriage(tasks) {
    this.processors.sort(this.comparePerformance);
    let i = 0;

    let intervalTasks = setInterval(() => {

      for (let process of this.processors) {

        if (i < tasks.length && !process.isBusy) {
          tasks[i].time *= this.time;
          process.making(tasks[i]);
          tasks[i].done = true;
          i++;
        }

      }

      if (i >= tasks.length && !ModelController.checkIsBusy(this.processors)) {
        clearInterval(intervalTasks);
        Observer.emit(Variables.tasksIsDone, tasks);
      }

    }, 4);
  }

  static checkIsBusy(processors) {
    for (let process of processors) {
      if (process.isBusy) {
        return true;
      }
    }
    return false;
  }

  static comparePerformance(a, b) {
    if (a.performance > b.performance)
      return -1;
    if (a.performance < b.performance)
      return 1;
    return 0;
  }



}
