import 'bootstrap/dist/css/bootstrap.css'

class Todo {
    constructor(description,completed,index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    }
}

const Todos = [
    new Todo('Wash the dishes', true, 0),
    new Todo('Complete To Do list project', false, 1)
];
