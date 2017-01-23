export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo: todo
  }
}

export function updateTodoText(text) {
  return{
    type: UPDATE_TODO_TEXT,
    text: text
  }
}
