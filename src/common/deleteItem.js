// import printLocalStorage from './printLoclaStorage.js';

const deleteItem = (e) => {
  e.stopPropagation();
  const index = e.currentTarget.parentNode.childNodes[0].innerHTML;
  const storedList = JSON.parse(localStorage.getItem('toDolist'));
  storedList.splice(index, 1);
  localStorage.setItem('toDolist', JSON.stringify(storedList));
  window.location.reload();
  // printLocalStorage();
};

export default deleteItem;