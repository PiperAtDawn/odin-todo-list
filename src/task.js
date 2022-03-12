class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  toggle() {
    this.completed = !this.completed;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }
}

export default Task;