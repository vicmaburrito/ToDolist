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

  function ReplaceTodoItem(todo) {
    const edit = `
    <div>
      <input type="checkbox" class="checkbox" 
      ${todo.completed ? 'checked' : ''}>
      <span>${todo.description}</span>
    </div>
    <span class="material-icons edit-icon" style=" cursor: pointer">
        more_vert
    </span>
      `;
    return edit;
  }
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

function ReplaceTodoItemForCompletedTask(todo) {
  const edit = `
  
  <div>
  <span class="material-icons edit-icon" style=" cursor: pointer; color: green">
      done
  </span>
    <strike><span>${todo.description}</span></strike>
  </div>
  <span class="material-icons edit-icon" style=" cursor: pointer">
      more_vert
  </span>
    `;

  return edit;
}

function changeElementToCompleted(index) {
  update(toDos[index]);
  saveTodosLocally();
  if (toDos[index].completed) {
    const completedElement = ReplaceTodoItemForCompletedTask(toDos[index]);
    const todoElements = document.querySelectorAll('.todo-element');
    todoElements[index].innerHTML = completedElement;
  }
}

function addEventsToCheckboxes(recievedIndex) {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox, index) => {
    if (recievedIndex) {
      if (recievedIndex === index) {
        checkbox.addEventListener('change', () => {
          changeElementToCompleted(index);
        });
      }
    } else {
      checkbox.addEventListener('change', () => {
        changeElementToCompleted(index);
      });
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const oldTodos = JSON.parse(localStorage.getItem('toDos'));
  if (oldTodos) {
    toDos = oldTodos;
  }
  createTodoItem();
  addEventsToCheckboxes();
});
