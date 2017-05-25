//
// variables.js
//

const isBusyProcess = 'is-busy-process';
const isFreeProcess= 'is-free-process';
const tasksIsDone = 'tasks-is-done';

export default class Variables {

  static get isBusyProcess() {
    return isBusyProcess;
  }

  static get isFreeProcess() {
    return isFreeProcess;
  }

  static get tasksIsDone() {
    return tasksIsDone;
  }
  
}