import { ADD_TODO, TOGGLE_TODO } from '../actions/index';

const initialState = {
  all: []
}

export function toDoList(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        all: state.all.concat(action.todo)
      }
    case TOGGLE_TODO:
      return {
        all: state.all.map((todo) =>{
          if (todo.id === action.todoID) {
            return {...todo, completed: !todo.completed}
          } else {
            return todo
          }
        })
      }
    default:
      console.log("no matched action")
      return state
  }
}
