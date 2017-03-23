import React from 'react';

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  incrementCount() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return(
      <div>
        <div className="count">{this.state.count}</div>
        <button onClick={this.incrementCount.bind(this)}>Click Me!</button>
      </div>
    )
  }
}

export default Clicker;