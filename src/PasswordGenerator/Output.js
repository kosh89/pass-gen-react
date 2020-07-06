import React from "react";

export class Output extends React.Component {
  render() {
    return <div className="output">{this.props.password}</div>;
  }
}
