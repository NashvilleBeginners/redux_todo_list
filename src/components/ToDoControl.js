import React from 'react';

export const ToDoControl = (props) => {
  return(
    <span
      onClick={props.handleClick.bind(this, props.todoID)}
      className={`btn btn-xs btn-${props.buttonStyle}`}>
      <span className={`glyphicon glyphicon-${props.symbol}`}></span>
    </span>
  )
}
