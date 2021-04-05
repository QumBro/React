import React, { Component } from 'react';

import Form from './Component/HW1/form.jsx';
import Test from './Component/HW2/Test.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val2: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      val2: this.state.val2 + 1,
    });
  }

  render() {
    return (
      <div>
        <Form />
        <Test
          trigger={15}
          value2={this.state.val2}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default App;
