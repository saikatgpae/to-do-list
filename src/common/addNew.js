import { List } from './lists.js';

const addNew = () => {
  const description = document.getElementById('input-todo').value;
  const list = new List();
  list.add(description, false);
  document.getElementById('input-todo').value = '';
  const storedTodoList = JSON.parse(localStorage.getItem('toDolist'));
  if (localStorage.getItem('toDolist') == null) {
    localStorage.setItem('toDolist', JSON.stringify(list.list));
    /* eslint-disable */
    location.reload();
    /* eslint-enable */
  } else {
    const newList = storedTodoList.concat(list.list);
    localStorage.setItem('toDolist', JSON.stringify(newList));
    /* eslint-disable */
    location.reload();
  }
};
export { addNew };