import { List } from './lists.js';

const addNew = (e) => {
  e.preventDefault();
  let data = '';
  const list = new List();
  const description = document.getElementById('input-todo').value;
  list.add(description, false);
  document.getElementById('input-todo').value = '';
  const storedTodoList = JSON.parse(localStorage.getItem('toDolist'));
  data = localStorage.getItem('toDolist') ? storedTodoList.concat(list.list) : list.list;
  localStorage.setItem('toDolist', JSON.stringify(data));
  window.location.reload();
};

export default addNew;