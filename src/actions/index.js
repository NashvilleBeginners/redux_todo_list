export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = "TOGGLE_TODO";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo: todo
  }
}

export function toggleTodo(todoID) {
  return {
    type: TOGGLE_TODO,
    todoID: todoID
  }
}
