import React, { Component } from "react";

class Textareademo extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }

  render() {
    return (
      <div>
       
        <textarea
          value={this.state.textAreaValue}
          onChange={this.handleChange}
          rows={6}
          cols={40}
       required
        />
      </div>
    );
  }
}

export default Textareademo;