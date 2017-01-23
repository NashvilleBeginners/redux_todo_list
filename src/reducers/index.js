import { combineReducers } from 'redux';
import { toDoList } from './toDoList';

const rootReducer = combineReducers({
  tasks: toDoList
});

export default rootReducer;
