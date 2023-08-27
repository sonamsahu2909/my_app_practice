import React, { Component } from "react";

export default class ComponentDidMound extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "ram",
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  shouldComponentUpdate() {
    console.warn("shouldComponentUpdate", this.state.count);
    //return true;
    //return true;
    if (this.state.count > 5 && this.state.count < 10) {
      return false;
    }
  }
  render() {
    console.log("hello render");
    return (
      <div>
        <h1>Components DidMount {this.state.name}</h1>
        <h1>Components DidMount {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ name: "rohit" });
          }}
        >
          Update Name
        </button>
        {/* <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Update Name1
        </button> */}
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Name1</button>

      </div>
    );
  }
}
