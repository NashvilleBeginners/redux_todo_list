import { ADD_TODO } from '../actions/index';

const initialState = {
  all: []
}

export function toDoList(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        all: state.all.concat(action.todo)
      }
    default:
      console.log("no matched action")
      return state
  }
}
