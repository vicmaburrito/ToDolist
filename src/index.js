import 'bootstrap/dist/css/bootstrap.css'
import './style.css';

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
    const ul = document.getElementById('toDoList');
    ul.classList.add('list');
    toDos.forEach((element) => {
        const li = document.createElement('li')
        li.classList.add('list-item');
        li.innerHTML = ` 
        ${element.description}
        `
        ul.appendChild(li)
    });
}

window.addEventListener('DOMContentLoaded', () => {
    displayTodos();
  });
