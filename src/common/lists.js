/* eslint-disable */
export class Todo {
    /* eslint-enable */
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
export class List {
  constructor() {
    this.list = [];
  }

  add(description, completed) {
    if (Array.isArray(this.list)) {
      const index = this.list.length;
      this.list.push(new Todo(description, completed, index));
    }
  }

  removeItem(index) {
    if (Array.isArray(this.list)) {
      const array = this.list;
      array.splice(index, 1);
    }
  }
}