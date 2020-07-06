import React from "react";
import { Heading } from "./PasswordGenerator/Heading";
import { PasswordLength } from "./PasswordGenerator/PasswordLength";
import { OptionsList } from "./PasswordGenerator/OptionsList";
import { Button } from "./PasswordGenerator/Button";
import { Output } from "./PasswordGenerator/Output";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sets: [
        {
          id: "lowercase",
          chars: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
          checked: false,
        },
        {
          id: "uppercase",
          chars: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
          checked: false,
        },
        {
          id: "numbers",
          chars: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          checked: false,
        },
        {
          id: "symbols",
          chars: ["~", "%", "*", "!", "^", "&", "?", "@", "#", "$", ")", "("],
          checked: false,
        },
      ],

      passLength: 10,
      result: "",
    };

    this.toggleSet = this.toggleSet.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onLengthChangeHandler = this.onLengthChangeHandler.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
  }

  //нормальнэ вообще так стэйт менять?
  toggleSet(id) {
    this.setState((prevState) => {
      let sets = JSON.parse(JSON.stringify(prevState.sets));

      sets.forEach((set) => {
        if (set.id === id) set.checked = !set.checked;
      });

      return { sets };
    });
  }

  onClickHandler() {
    let finalSet = [];
    let result = "";

    this.state.sets.forEach((set) => {
      if (set.checked) {
        finalSet = finalSet.concat(set.chars);
      }
    });

    const min = 0;
    const max = finalSet.length;

    //или лучче так поменять стэйт
    if (max) {
      for (let i = 0; i < this.state.passLength; i++) {
        result += finalSet[this.getRandomInt(min, max)];
      }
    }

    this.setState({ result });
  }

  onLengthChangeHandler(value) {
    this.setState({
      passLength: value,
    });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    return (
      <div className="container">
        <Heading title="Password Generator" />
        <PasswordLength min="8" max="30" value={this.state.passLength} onChange={this.onLengthChangeHandler} />
        <OptionsList onToggle={this.toggleSet} />
        <Button onClick={this.onClickHandler} />
        <Output password={this.state.result} />
      </div>
    );
  }
}
