import { List } from './lists.js';

const addNew = (e) => {
  e.preventDefault();

  const list = new List();
  const description = document.getElementById('input-todo').value;
  list.add(description, false);
  document.getElementById('input-todo').value = '';
  const storedTodoList = JSON.parse(localStorage.getItem('toDolist'));
  if (localStorage.getItem('toDolist') === null) {
    localStorage.setItem('toDolist', JSON.stringify(list.list));
    window.location.reload();
  } else {
    const newList = storedTodoList.concat(list.list);
    localStorage.setItem('toDolist', JSON.stringify(newList));
    window.location.reload();
  }
};

export default addNew;