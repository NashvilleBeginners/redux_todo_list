import React from 'react';

export const ToDo = ({text}) => {

  return(
    <div className="list-group-item">
      {text}
      <span className="pull-right todo-controls">
        <span className="btn btn-xs btn-primary">
          <span className="glyphicon glyphicon-ok"></span>
        </span>
        <span className="btn btn-xs btn-danger">
          <span className="glyphicon glyphicon-remove"></span>
        </span>
      </span>
    </div>
  )
}
