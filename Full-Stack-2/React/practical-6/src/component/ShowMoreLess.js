import React, { Component } from "react";

// const content = <p>this is hello</p>;

export default class ShowMoreLess extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      msg: "Read More",
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
    if (this.state.msg == "Read More") {
      this.setState({
        data: "This is the toggled content press button and enjoy !!!",
        msg: "Read Less",
      });
    } else {
      this.setState({ data: "", msg: "Read More" });
    }
  };

  render() {
    return (
      <div>
        <h1>Beta Labs</h1>
        <h4>Click the button to Show More|Less</h4>
        <p style={{ color: "blue" }}>{this.state.data}</p>
        <button onClick={this.more}>{this.state.msg}</button>
      </div>
    );
  }
}
