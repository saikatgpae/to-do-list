const setIndex = () => {
  if (localStorage.getItem('toDolist') != null) {
    const storedTodoList = JSON.parse(localStorage.getItem('toDolist'));
    storedTodoList.forEach((_, i) => {
      storedTodoList[i].index = i + 1;
      localStorage.setItem('toDolist', JSON.stringify(storedTodoList));
    });
  }
};
export default setIndex;