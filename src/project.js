class Project {
  static counter = 0;

  constructor(name) {
    this.id = Project.counter;
    this.name = name;
    this.tasks = [];
    Project.counter++;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  get tasks() {
    return this._tasks;
  }

  set tasks(value) {
    this._tasks = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

export default Project;