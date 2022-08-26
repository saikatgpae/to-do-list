import localStorageArray from './localStorage.js';

const deleteItem = (index = 1) => {
  localStorageArray.splice(index, 1);
};

export default deleteItem;