import React from 'react';

const buttonText = {
  start: 'Next',
  yesNo: 'Yes/No',
  free: 'I would rather be free',
  now: 'Now'
};

const process = {
  start: 'What is your now feeling?',
  welcome:
    'Could you welcome this feeling? Yes or no are both acceptable answers.',
  could:
    'Could you let this feeling go? Yes or no are both acceptable answers.',
  would:
    'Would you let this feeling go? Yes or no are both acceptable answers.',
  when: 'When? This is an invitation to just let it go NOW.',
  free: 'Would you rather have this feeling, or would you rather be free?'
};

class Basic extends React.Component {
  constructor() {
    super();
    this.state = {
      process: 'start',
      button: 'start'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let processState, buttonTextState;
    switch (this.state.process) {
      case 'start':
        // code block
        this.setState({ process: 'welcome' });
        this.setState({ button: 'welcome' });
        break;
      case 'welcome':
        this.setState({ process: 'could' });
        this.setState({ button: 'could' });
        break;
      case 'could':
        this.setState({ process: 'would' });
        this.setState({ button: 'would' });
        break;
      case 'would':
        if (event === 'no') {
          this.setState({ process: 'free' });
          this.setState({ button: 'free' });
        } else {
          this.setState({ process: 'when' });
          this.setState({ button: 'now' });
        }
        break;
      case 'free':
        this.setState({ process: 'when' });
        this.setState({ button: 'now' });
        break;
      case 'when':
        this.props.handleChange(0);
        break;
      default:
    }
  }

  render() {
    const buttonState = this.state.button;
    let button;

    if (buttonState === 'start') {
      button = (
        <button onClick={this.handleChange}>
          {buttonText[this.state.button]}
        </button>
      );
    } else if (
      buttonState === 'welcome' ||
      buttonState === 'could' ||
      buttonState === 'would'
    ) {
      button = (
        <div>
          <button onClick={this.handleChange}>Yes</button>
          <button onClick={() => this.handleChange('no')}>No</button>
        </div>
      );
    } else if (buttonState === 'free') {
      button = (
        <button onClick={this.handleChange}>I would rather be free</button>
      );
    } else if (buttonState === 'now') {
      button = <button onClick={this.handleChange}>Now</button>;
    }

    return (
      <div>
        <div>{process[this.state.process]}</div>
        {button}
      </div>
    );
  }
}

export default Basic;
