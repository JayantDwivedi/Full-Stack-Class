import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // function defination
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    if (this.state.count != 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h1>{this.state.count}</h1>
        <button style={{ marginRight: "10px" }} onClick={this.increment}>
          Increment
        </button>
        <button style={{ marginRight: "10px" }} onClick={this.reset}>
          Reset
        </button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
