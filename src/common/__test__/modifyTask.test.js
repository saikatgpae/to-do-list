/**
 * @jest-environment jsdom
 */
import localStorageArray from '../__mocks__/localStorage.js';

const mockHtml = '<ul class="listContainer"></ul><div class="clear-all text-danger"><h5 id="clear-all">Clear All Completed</h5></div>';
const listHTML = (obj) => {
  const list = `<li class="toDoList" id="list-${obj.index}">
  <input class="checkbox" type="checkbox" id="checkbox-${obj.index}" ${obj.complete ? 'checked' : ''}>
  <input class="description" type="text" id="todo-${obj.index}" value="${obj.description}">
  <button class="delete" type="button" id="button-${obj.index}"></button>
  </li>`;
  return list;
};

test('Edited item should be saved to locla storage', () => {
  document.body.innerHTML = mockHtml;
  const object = {};
  object.completed = false;
  object.description = 'shopping';
  object.index = 1;
  const toDoContainer = document.querySelector('.listContainer');
  toDoContainer.innerHTML += listHTML(object);
  expect(toDoContainer.children.length).toBe(1);
  localStorageArray.push(object);
  expect(localStorageArray.length).toBe(1);
  const id = document.querySelector('.description').id.split('-')[1];
  expect(localStorageArray[id - 1].description).toMatch('shopping');
  const newValue = 'Car Wash';
  localStorageArray[id - 1].description = newValue;
  expect(localStorageArray[id - 1].description).toMatch('Car Wash');
});

test('Checked items completed status should be changed as true', () => {
  expect(document.querySelector('.checkbox').checked).toBeFalsy();
  document.querySelector('.checkbox').checked = true;
  expect(document.querySelector('.checkbox').checked).toBeTruthy();
  const index = document.querySelector('.checkbox').id.split('-')[1];
  localStorageArray[index - 1].completed = true;
  expect(localStorageArray[index - 1].completed).toBeTruthy();
});

test('Delete All completed', () => {
  document.querySelector('.clear-all').addEventListener('click', () => {
    const newArray = localStorageArray.filter((item) => item.completed === false);
    expect(newArray.length).toBe(0);
  });
  document.querySelector('.clear-all').click();
});