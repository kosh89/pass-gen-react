import React from "react";

export class PasswordLength extends React.Component {
  render() {
    return (
      <div className="length-block">
        <p>
          Length: <span id="pass-length">{this.props.value}</span>
        </p>
        <input
          id="length-control"
          type="range"
          min={this.props.min}
          max={this.props.max}
          step="1"
          value={this.props.value}
          onChange={event => {
            this.props.onChange(event.target.value)
          }}
        ></input>
      </div>
    );
  }
}
