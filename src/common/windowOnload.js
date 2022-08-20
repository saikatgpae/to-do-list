const windowOnload = () => {
  const storedList = JSON.parse(localStorage.getItem('toDolist'));
  for (let i = 0; i < storedList.length; i += 1) {
    storedList[i].completed = false;
    localStorage.setItem('toDolist', JSON.stringify(storedList));
  }
};

export default windowOnload;