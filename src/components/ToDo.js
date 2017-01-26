import React from 'react';
import { ToDoControl } from './ToDoControl';

export const ToDo = (props) => {
  return(
    <div className="list-group-item">
      <span className={props.task.completed ? "completed" : ""}>
        {props.task.text}
      </span>
      <span className="pull-right todo-controls">
        <ToDoControl
          todoID={props.task.id}
          symbol="ok"
          buttonStyle="primary"
          handleClick={props.toggleTodo}/>
        <ToDoControl
          todoID={props.task.id}
          symbol="remove"
          buttonStyle="danger"
          handleClick={props.toggleTodo}/>
      </span>
    </div>
  )
}
