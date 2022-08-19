import './style.css';
import rIcon from './images/refresh-icon.png';
import { refresh } from './common/refresh.js';
import { printLocalStorage } from './common/printLoclaStorage.js';
import { clearAll } from './common/clearAll.js';
import { addNew } from './common/addNew';
import { saveEdits } from './common/saveEdits.js'



// Add the image to todo div div.
const refreshIcon = new Image();
refreshIcon.src = rIcon;
refreshIcon.classList.add('refresh');
document.querySelector('.todo').appendChild(refreshIcon);

// ONCLICK ROTATE THE REFRESH ICON AND REFRESH THE WHOLE PAGE
document.querySelector('.refresh').addEventListener('click', refresh);

//PRINT THE LOCAL STORAGE
printLocalStorage();

// REMOVE THE WHOLE LIST
document.querySelector('.clear-all').addEventListener('click', clearAll);

// ADD NEW TO-DO LIST
document.getElementById('enter').addEventListener('click', addNew);

// DELETE AN ITEM


// EDIT AN ITEM
document.querySelectorAll('.description-label').forEach((description) => {
    description.addEventListener('input', saveEdits)
});