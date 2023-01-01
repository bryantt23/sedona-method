import React from 'react';

const questions = [
  'What is your now feeling?',
  'Could you welcome this feeling?',
  'Which want is being stirred up?',
  'Could you let this want go, just for right now/as best you can?'
];

const buttonTextWants = [
  'Next',
  'Yes/No',
  'Approval/Control/Security/Separation/Oneness',
  'Yes/No'
];

class Wants extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      index:
        this.state.index === questions.length - 1
          ? this.props.handleChange(1)
          : this.state.index + 1
    });
  }

  render() {
    return (
      <div>
        <div>{questions[this.state.index]}</div>
        <button onClick={this.handleChange}>
          {buttonTextWants[this.state.index]}
        </button>
      </div>
    );
  }
}

export default Wants;
