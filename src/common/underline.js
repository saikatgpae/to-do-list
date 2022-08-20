const underline = (e) => {
  if (e.currentTarget.checked === true) {
    e.currentTarget.parentNode.childNodes[3].style.textDecoration = 'line-through';
    e.currentTarget.parentNode.childNodes[3].style.color = 'gray';
  } else {
    e.currentTarget.parentNode.childNodes[3].style.textDecoration = 'none';
    e.currentTarget.parentNode.childNodes[3].style.color = 'black';
  }
};

export default underline;