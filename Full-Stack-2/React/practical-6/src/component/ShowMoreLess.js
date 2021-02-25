import React, { Component } from "react";

// const content = <p>this is hello</p>;

export default class ShowMoreLess extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      toggle: true,
      buttonText: "Read More",
    };
    console.log("Inside Constructor");
  }

  componentDidMount() {
    console.log("Mount Phase");
  }

  componentDidUpdate() {
    console.log("Updation Phase");
  }

  // function show more
  more = () => {
    if (this.state.toggle) {
      this.setState({
        data: "This is the toggled content press button and enjoy !!!",
        buttonText: "Read Less",
        toggle: false,
      });
    } else {
      this.setState({ data: "", buttonText: "Read More", toggle: true });
    }
  };

  render() {
    return (
      <div>
        <h1>Beta Labs</h1>
        <h4>Click the button to Show More|Less</h4>
        <p style={{ color: "blue" }}>{this.state.data}</p>
        <button onClick={this.more}>{this.state.buttonText}</button>
      </div>
    );
  }
}
