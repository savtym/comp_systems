//
// viewController.js
//

export default class ViewController {

  constructor(model) {
    this.app = document.getElementsByTagName('app-main')[0];
  	this.model = model;
  	this.app.innerHTML = '';
  }

  busy(process) {
    const processDom = document.createElement('div');
    processDom.innerHTML = `<div class="isbusy">${ process.title }, ${ process.performance }</div>`;
    this.app.appendChild(processDom);
  }

  free(process) {
    const processDom = document.createElement('div');
    processDom.innerHTML = `<div class="isfree">${ process.title }, ${ process.performance }</div>`;
    this.app.appendChild(processDom);
  }

  result(tasks) {
    const tasksDom = document.createElement('div');
    tasksDom.innerHTML = `<div class="result">Result length tasks: ${ tasks.length }</div>`;
    this.app.appendChild(tasksDom);
  }

}