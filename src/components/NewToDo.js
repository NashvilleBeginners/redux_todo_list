import React from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { updateTodoText, addTodo } from '../actions/index';

class newToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    e.preventDefault();
    this.props.updateTodoText(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTask = {
      id: Date.now(),
      text: this.props.text
    }
    this.props.addTodo(newTask);
    browserHistory.push("/");
  }

  render() {
    return(
      <div>
        <h1>New todo item</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleChange.bind(this)}
                 type="text"
                 value={this.props.text}
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

const mapStateToProps = (state) => {
  return {
    text: state.tasks.text
  }
}

const NewToDo = connect(
  mapStateToProps,
  { updateTodoText,
    addTodo }
)(newToDo);

export default NewToDo;
