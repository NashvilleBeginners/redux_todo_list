import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ToDo } from '../components/ToDo';

class toDoList extends React.Component {
  renderTaskList() {
    const tasks = this.props.tasks;
    if (tasks.length < 1) {
      return (
        <div className="jumbotron text-center">
          There are no tasks yet
        </div>
      )
    } else {
      return (
        <div className="list-group">
          {tasks.map((task) => {
            return <ToDo key={task.id} text={task.text}/>
          })}
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <h1>To do items:</h1>
        <div>
          {this.renderTaskList()}
        </div>
        <Link to="/newToDo" className="btn btn-primary">
          New To Do Item:
        </Link>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.all
  }
}

const ToDoList = connect(
  mapStateToProps,
  null
)(toDoList)

export default ToDoList
