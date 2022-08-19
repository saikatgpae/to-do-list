import './style.css';
import rIcon from './images/refresh-icon.png';
import { refresh } from './common/refresh.js';
import { printLocalStorage } from './common/printLoclaStorage.js';
import { clearAll } from './common/clearAll.js';
import { addNew } from './common/addNew';
import { saveEdits } from './common/saveEdits.js';
import { underline } from './common/underline.js';
import { changeItemAppearence } from './common/changeItemAppearence.js';
import { deleteItem } from './common/deleteItem.js';
import { List } from './common/lists.js';
import { addWithEnter } from './common/addWithEnter.js';



// Add the image to todo div div.
const refreshIcon = new Image();
refreshIcon.src = rIcon;
refreshIcon.classList.add('refresh');
document.querySelector('.todo').appendChild(refreshIcon);


// ONCLICK ROTATE THE REFRESH ICON AND REFRESH THE WHOLE PAGE
document.querySelector('.refresh').addEventListener('click', refresh);

//PRINT THE LOCAL STORAGE
printLocalStorage();

// ADD NEW TO-DO LIST
document.getElementById('enter').addEventListener('click', addNew);


// LINE-THROUGH AN ITEM CHECKING THE CHECKBOX
document.querySelectorAll('.check-box').forEach((value) => {
    value.addEventListener('input', underline)
});

// REMOVE THE LIST OF CHECKED ITEMS
document.querySelector('.clear-all').addEventListener('click', clearAll);

// Delete a row
document.querySelectorAll('.bin').forEach((bin) => {
    bin.addEventListener('click', deleteItem)
  });

// Taking Inputs to use enter key
document.querySelector("#input-todo").addEventListener('change', addWithEnter);

// CHANGE THE THEAM OF THE SELECTED TO DO LIST
document.querySelectorAll('.list-item').forEach((item) => {
    item.addEventListener('click', changeItemAppearence)
  });

  // EDIT AN ITEM
document.querySelectorAll('.description-label').forEach((description) => {
    description.addEventListener('input', (e) => {
        e.stopPropagation();
    })
});
