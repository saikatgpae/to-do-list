import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import rIcon from './images/refresh-icon.png';
import refresh from './common/refresh.js';
import printLocalStorage from './common/printLoclaStorage.js';
import clearAll from './common/clearAll.js';
import addNew from './common/addNew.js';
import saveEdits from './common/saveEdits.js';
import underline from './common/underline.js';
import changeItemAppearence from './common/changeItemAppearence.js';
import deleteItem from './common/deleteItem.js';
import setIndex from './common/setIndex.js';

const refreshIcon = new Image();
refreshIcon.src = rIcon;

// PRINT THE LOCAL STORAGE
printLocalStorage();

// SET INDEX OF LOCAL STORAGE
setIndex();

// Add the image to todo div div.
refreshIcon.classList.add('refresh');
document.querySelector('.todo').appendChild(refreshIcon);

// ONCLICK ROTATE THE REFRESH ICON AND REFRESH THE WHOLE PAGE
document.querySelector('.refresh').addEventListener('click', refresh);

// ADD NEW TO-DO LIST
document.querySelector('form').addEventListener('submit', addNew);

// EDIT AN ITEM
document.querySelectorAll('.description-label').forEach((description) => {
  description.addEventListener('input', saveEdits);
});

// Delete a row
document.querySelectorAll('.bin').forEach((bin) => {
  bin.addEventListener('click', deleteItem);
});

// CHANGE THE THEAM OF THE SELECTED TO DO LIST
document.querySelectorAll('.list-item').forEach((item) => {
  item.addEventListener('click', changeItemAppearence);
});

// REMOVE THE LIST OF CHECKED ITEMS
document.querySelector('.clear-all').addEventListener('click', clearAll);

// LINE-THROUGH AN ITEM CHECKING THE CHECKBOX
document.querySelectorAll('.check-box').forEach((value) => {
  value.addEventListener('change', underline);
});
