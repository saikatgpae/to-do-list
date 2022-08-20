const changeItemAppearence = (e) => {
  e.currentTarget.childNodes[4].style.display = 'none';
  e.currentTarget.childNodes[6].style.display = 'block';
};

export default changeItemAppearence;