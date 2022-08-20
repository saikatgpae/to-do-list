import { List } from './lists.js';
import printLocalStorage from './printLoclaStorage.js';

export class Todo {
  /* eslint-enable */
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const list = new List();
const addNew = (e) => {
  e.stopPropagation();
  document.querySelector('.container').textContent = '';
  const description = document.getElementById('input-todo').value;
  list.add(description, false);
  document.getElementById('input-todo').value = '';
  printLocalStorage();
  window.location.reload();
};

export default addNew;