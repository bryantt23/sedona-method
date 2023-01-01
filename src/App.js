import React from 'react';
import Basic from './Basic';
import Wants from './Wants';
import TripleWelcome from './TripleWelcome';
//
// https://codepen.io/bryantt23/pen/ZEQVEdZ
// https://stackoverflow.com/questions/39210971/this-setstate-is-undefined
const maxNum = 3;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      component: this.generateComponent()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // let nextNum = randomIntFromInterval(0, 2);
    let nextNum = (this.state.number + 1) % 3; //0 1 2 repeat
    while (nextNum === this.state.number) {
      nextNum = randomIntFromInterval(0, 2);
    }

    this.setState(
      {
        number: nextNum
      },
      () => {
        this.setState({ component: this.generateComponent() });
      }
    );
  };

  generateComponent() {
    const index = this.state === undefined ? 0 : this.state.number;
    if (index == 0) {
      return <Basic handleChange={this.handleChange} />;
    } else if (index == 1) {
      return <Wants handleChange={this.handleChange} />;
    } else {
      return <TripleWelcome handleChange={this.handleChange} />;
    }
  }

  render() {
    const index = this.state.number;
    return (
      <div>
        <br />
        <div>{this.state.component}</div>
      </div>
    );
  }
}

export default App;
