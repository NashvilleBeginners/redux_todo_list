import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ToDo } from '../components/ToDo';
import { toggleTodo } from '../actions/index';

import Clicker from '../example_tests/ClickerComponent';

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
            return <ToDo
              key={task.id}
              task={task}
              toggleTodo={this.props.toggleTodo}/>
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
        <Clicker />
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

// http://stackoverflow.com/questions/34458261/how-to-get-simple-dispatch-from-this-props-using-connect-w-redux
const ToDoList = connect(
  mapStateToProps,
  { toggleTodo }
)(toDoList)

export default ToDoList
