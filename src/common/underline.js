const underline = (e) => {
  const row = e.currentTarget.parentNode.childNodes[3];
  const indexdNode = e.currentTarget.parentNode.childNodes[0];
  const storedList = JSON.parse(localStorage.getItem('toDolist'));

  if (e.currentTarget.checked === true) {
    row.style.textDecoration = 'line-through';
    row.style.color = 'gray';
    const index = indexdNode.innerHTML;
    storedList[index].completed = true;
    localStorage.setItem('toDolist', JSON.stringify(storedList));
  } else {
    const index = indexdNode.innerHTML;
    storedList[index].completed = false;
    localStorage.setItem('toDolist', JSON.stringify(storedList));
    row.style.textDecoration = 'none';
    row.style.color = 'black';
  }
};

export default underline;