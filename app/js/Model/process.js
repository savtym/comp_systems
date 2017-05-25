//
// process.js
//

import Variables from '../common/variables.js';
import Observer from '../common/observer.js';


export default class Process {

  constructor(title, performance) {
    this.title = title;
    this.performance = performance;
    this._isBusy = false;
  }

  get isBusy() {
    return this._isBusy;
  }

  making(task) {

    this._isBusy = true;
    Observer.emit(Variables.isBusyProcess, this, task);

    setTimeout(() => {
      this._isBusy = false;
      Observer.emit(Variables.isFreeProcess, this, task);
    }, task.time * (1 / this.performance));

  }

}
