import kIcon from '../images/3dot.png';
import bIcon from '../images/bin.png';

const binIcon = new Image();
binIcon.src = bIcon;
binIcon.classList.add('icon');

const kebabIcon = new Image();
kebabIcon.src = kIcon;
kebabIcon.classList.add('icon');
const printLocalStorage = () => {
  if (localStorage.getItem('toDolist') != null) {
    const storedList = JSON.parse(localStorage.getItem('toDolist'));
    document.querySelector('.all-lists').textContent = '';
    storedList.forEach((_, i) => {
      const div = document.createElement('div');
      div.className = 'list-item';
      div.innerHTML = `<h5 class="d-none">${i}</h5><input type="checkbox" class="check-box">
      <div class="description-label" contenteditable="true">${storedList[i].description}</div><img src="${kIcon}" alt="Kebab Icon" class="kebab icon">
      <img src="${bIcon}" alt="d-none icon bin" class="bin icon ">`;
      document.querySelector('.all-lists').appendChild(div);
    }, 1);
  }
};

export default printLocalStorage;