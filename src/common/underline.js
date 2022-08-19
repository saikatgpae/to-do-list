const underline = (e) => {
  if (e.currentTarget.checked === true) {
    const index = e.currentTarget.parentNode.childNodes[0].innerHTML;
    console.log(index);
    e.currentTarget.parentNode.childNodes[3].style.textDecoration = 'line-through';
    e.currentTarget.parentNode.childNodes[3].style.color = 'gray';
  } else {
    e.currentTarget.parentNode.childNodes[3].style.textDecoration = 'none';
    e.currentTarget.parentNode.childNodes[3].style.color = 'black';
  }
};
/* eslint-disable */
export { underline }