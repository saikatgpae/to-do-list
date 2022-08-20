const underline = (e) => {
  if (e.currentTarget.checked === true) {
    e.currentTarget.parentNode.childNodes[3].style.textDecoration = 'line-through';
    e.currentTarget.parentNode.childNodes[3].style.color = 'gray';
    const index = e.currentTarget.parentNode.childNodes[0].innerHTML;
    const storedList = JSON.parse(localStorage.getItem('toDolist'));
    storedList[index].completed = true;
    localStorage.setItem('toDolist', JSON.stringify(storedList));
  } else {
    const index = e.currentTarget.parentNode.childNodes[0].innerHTML;
    const storedList = JSON.parse(localStorage.getItem('toDolist'));
    storedList[index].completed = false;
    localStorage.setItem('toDolist', JSON.stringify(storedList));
    e.currentTarget.parentNode.childNodes[3].style.textDecoration = 'none';
    e.currentTarget.parentNode.childNodes[3].style.color = 'black';
  }
};

export default underline;