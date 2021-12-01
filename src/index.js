import 'bootstrap/dist/css/bootstrap.css'
import './style.css';

const button = document.querySelector('button');

class Todo {
    constructor(description,completed,index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    }
}

const toDos = [
    new Todo('Wash the dishes', true, 0),
    new Todo('Complete To Do list project', false, 1)
];

function displayTodos() {
    toDos.sort((a, b) => (a.index > b.index ? 1 : -1));
    toDos.forEach((element) => {
      const li = document.createElement('li');
      li.innerHTML = `
      <div class="flex">
        <div>
            <input type="checkbox">
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

window.addEventListener('DOMContentLoaded', () => {
    displayTodos();
  });
