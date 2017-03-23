import React from 'react';
import AnotherBasicComponent from './AnotherBasicComponent';

class BasicComponent extends React.Component {
  render() {
    return(
      <div>
        <div className="greeting">Hello World</div>
        <AnotherBasicComponent />
      </div>
    );
  }
}

export default BasicComponent;