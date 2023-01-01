import React from 'react';
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
    let nextNum = randomIntFromInterval(0, 2);
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

const buttonText = {
  start: 'Next',
  yesNo: 'Yes/No',
  free: 'I would rather be free',
  now: 'Now'
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

export default App;
