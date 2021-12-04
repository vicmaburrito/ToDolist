function createTodo(todoItem, todoList) {
  todoList.push(todoItem);
}

function updateTodo(newTodo, oldTodo) {
  oldTodo = newTodo;
  return oldTodo;
}

export { createTodo, destroyTodo, updateTodo }