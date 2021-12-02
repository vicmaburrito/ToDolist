import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import update from './update';

const button = document.querySelector('button');

class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

let toDos = [
  new Todo('Wash the dishes', true, 0),
  new Todo('Complete To Do list project', false, 1),
];

function displayTodos() {
  toDos.sort((a, b) => (a.index > b.index ? 1 : -1));
  toDos.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="flex">
        <div>
        <input type="checkbox" class="checkbox"
        ${element.completed ? 'checked' : ''}>
          <span>${element.description}</span>
        </div>
        <span class="material-icons">
            more_vert
        </span>
      </div>
      <hr>`;

    button.parentElement.insertBefore(li, button);
  });
}

function saveTodosLocally() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

function addEventsToCheckboxes() {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      update(toDos[index]);
      saveTodosLocally();
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const oldTodos = JSON.parse(localStorage.getItem('toDos'));
  if (oldTodos) {
    toDos = oldTodos;
  }
  displayTodos();
  addEventsToCheckboxes();
});
