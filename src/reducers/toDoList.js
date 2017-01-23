import { ADD_TODO, UPDATE_TODO_TEXT } from '../actions/index';

const initialState = {
  all: [],
  text: ''
}

export function toDoList(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        all: state.all.concat(action.todo),
        text: ''
      }
    case UPDATE_TODO_TEXT:
      return {
        ...state,
        text: action.text
      }
    default:
      console.log("no matched action")
      return state
  }
}
