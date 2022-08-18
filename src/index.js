import './style.css';
import rIcon from './images/refresh-icon.png';
import kIcon from './images/3dot.png';
import { refresh } from './common/refresh.js';
import { List } from './common/lists.js';

// Add the image to todo div div.
const refreshIcon = new Image();
refreshIcon.src = rIcon;
refreshIcon.classList.add('refresh');
document.querySelector('.todo').appendChild(refreshIcon);

// Onclick change the refresh image.
document.querySelector('.refresh').addEventListener('click', refresh);

// Display the stored lists.
const list = new List();
list.add('Car wash', false);
list.add('Dish wash', false);
list.add('Preparing food', false);
list.add('shopping', false);

const kebabIcon = new Image();
kebabIcon.src = kIcon;
kebabIcon.classList.add('icon');
/* eslint-disable */
for (let i = 0; i < list.list.length; i++) {
  /* eslint-enable */
  const div = document.createElement('div');
  div.className = 'list-item';
  div.innerHTML = `<input type="checkbox" class="check-box">
  <label>${list.list[i].description}</label>
  <img src="${kIcon}" alt="" class="icon">`;
  document.querySelector('.container').appendChild(div);
}