const saveEdits = (e) => {
  e.stopPropagation();
  const text = e.currentTarget.innerHTML;
  const index = e.currentTarget.parentNode.childNodes[0].innerHTML;
  const toDolist = JSON.parse(localStorage.getItem('toDolist'));
  toDolist[index].description = text;
  localStorage.setItem('toDolist', JSON.stringify(toDolist));
};
/* eslint-disable */
export { saveEdits };