const setIndex = () => {
  if (localStorage.getItem('toDolist') != null) {
    const storedTodoList = JSON.parse(localStorage.getItem('toDolist'));
    for (let i = 0; i < storedTodoList.length; i += 1) {
      storedTodoList[i].index = i + 1;
      localStorage.setItem('toDolist', JSON.stringify(storedTodoList));
    }
  }
};
export default setIndex;