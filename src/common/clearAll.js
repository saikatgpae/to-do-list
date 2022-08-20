const clearAll = () => {
  // Remove all checked
  const storedList = JSON.parse(localStorage.getItem('toDolist'));
  const newArray = storedList.filter((item) => item.completed === false);
  localStorage.setItem('toDolist', JSON.stringify(newArray));
  window.location.reload();
};

export default clearAll;