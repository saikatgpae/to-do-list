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
      const storedTodoList = JSON.parse(localStorage.getItem('toDolist')) ?? [];
      this.list = storedTodoList;
      const index = this.list.length + 1;
      this.list.push(new Todo(description, completed, index));
      localStorage.setItem('toDolist', JSON.stringify(this.list));
    }
  }

  removeItem(index) {
    if (Array.isArray(this.list)) {
      const array = this.list;
      array.splice(index, 1);
    }
  }
}