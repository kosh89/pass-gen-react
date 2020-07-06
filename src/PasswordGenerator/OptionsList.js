import React from "react";
import { OptionsItem } from "./OptionsItem";

export class OptionsList extends React.Component {
  render() {
    return (
      <ul>
        <OptionsItem type="lowercase" onChange={this.props.onToggle} />
        <OptionsItem type="uppercase" onChange={this.props.onToggle}/>
        <OptionsItem type="numbers" onChange={this.props.onToggle}/>
        <OptionsItem type="symbols" onChange={this.props.onToggle}/>
      </ul>
    );
  }
}
