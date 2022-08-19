const clearAll = () => {
  /* eslint-disable */
    localStorage.removeItem('toDolist');
    location.reload();
}

export { clearAll }