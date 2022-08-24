const saveEdits = (e) => {
  const text = e.currentTarget.textContent;
  const index = e.currentTarget.parentNode.childNodes[0].textContent;
  const toDolist = JSON.parse(localStorage.getItem('toDolist'));
  toDolist[index].description = text;
  localStorage.setItem('toDolist', JSON.stringify(toDolist));
};

export default saveEdits;