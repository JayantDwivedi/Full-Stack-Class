import React, { Component } from "react";

class ReactState extends Component {
  constructor() {
    super();
    this.state = {
      rollno: 1,
      name: "pankaj",
    };
  }

  // event binding with arrow function
  updateMe = () => {
    this.setState({
      rollno: 12,
      name: "Jayant",
    });
  };

  updateAgain = () => {
    this.setState({
      rollno: 23,
      name: "Yash Jain",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.rollno}</h1>
        <h1>{this.state.name}</h1>
        <button onClick={this.updateMe}>Click Me</button>
        <button onClick={this.updateAgain}>Update Again</button>
      </div>
    );
  }
}

export default ReactState;
