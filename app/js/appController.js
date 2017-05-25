//
// appController.js
//

import Observer from './common/observer.js';
import Variables from './common/variables.js'

import ModelController from './modelController.js';
import ViewController from './viewController.js';



export class AppController {

  static start() {

    Observer.addListener(Variables.isBusyProcess, (process, task) => this.isBusyProcess(process, task));
    Observer.addListener(Variables.isFreeProcess, (process, task) => this.isFreeProcess(process, task));
    Observer.addListener(Variables.tasksIsDone, (tasks) => this.tasksIsDone(tasks));

    this.model = new ModelController();
    this.view = new ViewController(this.model);

  }

  static isBusyProcess(process, task) {
    console.log(`process is busy: ${ process.title }, ${ process.performance }`);
    this.view.busy(process, task);
  }

  static isFreeProcess(process, task) {
    console.log(`process is free: ${ process.title }, ${ process.performance }`);
    this.view.free(process, task);
  }

  static tasksIsDone(tasks) {
    this.view.result(tasks);
  }




}
