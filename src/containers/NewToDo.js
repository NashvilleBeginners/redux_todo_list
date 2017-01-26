import React from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class newToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTask = {
      id: Date.now(),
      text: this.todoInput.value,
      completed: false
    }
    this.props.addTodo(newTask);
    browserHistory.push("/");
  }

  render() {
    return(
      <div className="col-xs-6">
        <h1>New todo item</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="go to gym..."
            ref={(input) => {this.todoInput = input;}}
            autoFocus/>
          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">
              Add Item
            </button>
            <Link to="/" className="btn btn-danger cancel-button">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

const NewToDo = connect(
  null,
  { addTodo }
)(newToDo);

export default NewToDo;
