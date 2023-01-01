import React from 'react';

const questionsTriple = [
  'What is your now feeling?',
  'Could you welcome this feeling?',
  'Could you welcome any wanting to change this?',
  'Could you welcome taking this personally?',
  "Could you notice what's here right now?"
];

class TripleWelcome extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      start: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      index:
        this.state.index === questionsTriple.length - 1
          ? this.props.handleChange(2)
          : this.state.index + 1
    });
    this.setState({ start: this.state.index === 0 ? true : false });
  }

  render() {
    return (
      <div>
        <div>{questionsTriple[this.state.index]}</div>
        <button onClick={this.handleChange}>
          {this.state.start ? 'Next' : 'Yes/No'}
        </button>
      </div>
    );
  }
}

export default TripleWelcome;
