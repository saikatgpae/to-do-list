const saveEdits = (e) => {
  const text = e.currentTarget.innerHTML;
  const index = e.currentTarget.parentNode.childNodes[0].innerHTML;
  const toDolist = JSON.parse(localStorage.getItem('toDolist'));
  toDolist[index].description = text;
  localStorage.setItem('toDolist', JSON.stringify(toDolist));
};

export default saveEdits;