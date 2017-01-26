import React from 'react';
import { ToDoControl } from './ToDoControl';

export const ToDo = (props) => {
  return(
    <div className="list-group-item">
      {props.text}
      <span className="pull-right todo-controls">
        <ToDoControl
          symbol="ok"
          buttonStyle="primary"/>
        <ToDoControl
          symbol="remove"
          buttonStyle="danger"/>
      </span>
    </div>
  )
}
