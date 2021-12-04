import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import update from './update';
import { createTodo, updateTodo } from './todos_controller';

const button = document.querySelector('button');

class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

let toDos = [];

function createTodoItem(todo) {
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="flex">
      <div>
          <input type="checkbox" class="checkbox"
          ${todo.completed ? 'checked' : ''}>
          <span>${todo.description}</span>
      </div>
      <span class="material-icons edit-icon" style="cursor: pointer">
          more_vert
      </span>
    </div>
    <hr>`;
  return li;
}

function addTodoItem(todo) {
  const li = createTodoItem(todo);
  button.parentElement.insertBefore(li, button);
}

function todoItem() {
  toDos.sort((a, b) => (a.index > b.index ? 1 : -1));
  toDos.forEach((todo) => {
    addTodoItem(todo);
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
