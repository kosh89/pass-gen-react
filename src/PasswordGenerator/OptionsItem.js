import React from "react";

export class OptionsItem extends React.Component {
  render() {
    let charsSet = "";
    let charsDescription = "";

    switch (this.props.type) {
      case "lowercase":
        charsSet = "a-z";
        charsDescription = "Lowercase";
        break;

      case "uppercase":
        charsSet = "A-Z";
        charsDescription = "Uppercase";
        break;

      case "numbers":
        charsSet = "0-9";
        charsDescription = "Numbers";
        break;

      case "symbols":
        charsSet = "~ % * ! ^ & ? @ # $ ) (";
        charsDescription = "Symbols";
        break;

      default:
        break;
    }

    return (
      <li>
        <input
          type="checkbox"
          id={this.props.type}
          className="params"

          onChange={()=>{this.props.onChange(this.props.type)}}
        ></input>

        <label htmlFor={this.props.type}>{charsDescription}</label>

        <span className="chars">({charsSet})</span>
      </li>
    );
  }
}
