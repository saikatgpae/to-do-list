import { List } from '../lists.js';
import localStorageArray from './localStorage.js';

const addNew = () => {
  let list = new List();
  const description = 'Car Wash';
  list.add(description, false);
  list = localStorageArray;
};

export default addNew;