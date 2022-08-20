const clearAll = () => {
  localStorage.removeItem('toDolist');
  window.location.reload();
};

export default clearAll;