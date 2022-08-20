const windowOnload = () => {
  const storedList = JSON.parse(localStorage.getItem('toDolist'));
/* eslint-disable */
  for (let i = 0; i < storedList.length; i++) {
 /* eslint-enable */
    storedList[i].completed = false;
    localStorage.setItem('toDolist', JSON.stringify(storedList));
  }
};

export default windowOnload;