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
      text: this.todoInput.value
    }
    this.props.addTodo(newTask);
    browserHistory.push("/");
  }

  render() {
    return(
      <div>
        <h1>New todo item</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            ref={(input) => {this.todoInput = input;}}
            autoFocus/>
          <div>
            <button type="submit" className="btn btn-primary">
              Add Item
            </button>
          </div>
        </form>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </div>
    )
  }
}

const NewToDo = connect(
  null,
  { addTodo }
)(newToDo);

export default NewToDo;
