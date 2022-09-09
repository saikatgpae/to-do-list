/**
 * @jest-environment jsdom
 */
import localStorageArray from '../__mocks__/localStorage.js';

const mockHtml = '<ul class="listContainer"></ul>';
const listHTML = (obj) => {
  const list = `<li class="toDoList" id="list-${obj.index}">
  <input class="checkbox" type="checkbox" id="checkbox-${obj.index}" ${obj.complete ? 'checked' : ''}>
  <input class="description" type="text" id="todo-${obj.index}" value="${obj.description}">
  <button class="delete" type="button" id="button-${obj.index}"></button>
  </li>`;
  return list;
};

describe('Test add and delete method', () => {
  test('New Entry should save to localStorage', () => {
    document.body.innerHTML = mockHtml;
    const toDoContainer = document.querySelector('.listContainer');
    const object = {};
    object.description = 'Car Wash';
    object.index = 1;
    object.complete = false;
    toDoContainer.innerHTML += listHTML(object);
    expect(toDoContainer.children.length).toBe(1);
    localStorageArray.push(object);
    expect(localStorageArray.length).toBe(1);
    const fetchList = toDoContainer.children[0];
    const fetchText = fetchList.querySelector('.description');
    expect(fetchText.value).toMatch(object.description);

    object.description = 'Shopping';
    object.index = 1;
    object.complete = false;
    localStorageArray.push(object);
    expect(localStorageArray.length).toBe(2);
  });

  test('Remove the selected item', () => {
    expect(localStorageArray.length).toBe(2);
    const toDoContainer = document.querySelector('.listContainer');
    document.querySelectorAll('.delete').forEach((button) => {
      button.addEventListener('click', () => {
        button.parentNode.remove();
        expect(toDoContainer.children.length).toBe(0);
        const index = Number(button.id.split('-')[1]);
        localStorageArray.splice(index - 1, 1);
        expect(localStorageArray.length).toBe(1);
      });
    });
    document.querySelector('#button-1').click();
  });
});