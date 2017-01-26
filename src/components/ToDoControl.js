import React from 'react';

export const ToDoControl = (props) => {
  return(
    <span className={`btn btn-xs btn-${props.buttonStyle}`}>
      <span className={`glyphicon glyphicon-${props.symbol}`}></span>
    </span>
  )
}
