import React, { useState } from 'react';

const buttonText = {
  start: 'Next',
  yesNo: 'Yes/No',
  free: 'I would rather be free',
  now: 'Now'
};

const processObject = {
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

function Basic(props) {
  const [process, setProcess] = useState('start');
  const [buttonState, setButtonState] = useState('start');

  function handleChangeLocal(event) {
    switch (process) {
      case 'start':
        // code block
        setProcess('welcome');
        setButtonState('welcome');
        break;
      case 'welcome':
        setProcess('could');
        setButtonState('could');
        break;
      case 'could':
        setProcess('would');
        setButtonState('would');
        break;
      case 'would':
        if (event === 'no') {
          setProcess('free');
          setButtonState('free');
        } else {
          setProcess('when');
          setButtonState('now');
        }
        break;
      case 'free':
        setProcess('when');
        setButtonState('now');
        break;
      case 'when':
        props.handleChange(0);
        break;
      default:
    }
  }

  let button;

  if (buttonState === 'start') {
    button = (
      <button onClick={handleChangeLocal}>{buttonText[buttonState]}</button>
    );
  } else if (
    buttonState === 'welcome' ||
    buttonState === 'could' ||
    buttonState === 'would'
  ) {
    button = (
      <div>
        <button onClick={handleChangeLocal}>Yes</button>
        <button onClick={() => handleChangeLocal('no')}>No</button>
      </div>
    );
  } else if (buttonState === 'free') {
    button = (
      <button onClick={handleChangeLocal}>I would rather be free</button>
    );
  } else if (buttonState === 'now') {
    button = <button onClick={handleChangeLocal}>Now</button>;
  }

  return (
    <div>
      <div>{processObject[process]}</div>
      {button}
    </div>
  );
}

export default Basic;
