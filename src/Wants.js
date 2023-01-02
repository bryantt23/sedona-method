import React, { useState } from 'react';

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

function Wants(props) {
  const [index, setIndex] = useState(0);

  function handleChangeLocal(event) {
    setIndex(
      index === questions.length - 1 ? props.handleChange(1) : index + 1
    );
  }

  return (
    <div>
      <div>{questions[index]}</div>
      <button onClick={handleChangeLocal}>{buttonTextWants[index]}</button>
    </div>
  );
}

export default Wants;
