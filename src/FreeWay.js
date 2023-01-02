import React, { useState } from 'react';

const questions = [
  'What is your now feeling?',
  'Could you welcome this feeling?',
  'Are you this feeling or are you that which is aware yet unaffected?',
  'Check',
  'How does awareness feel/react to this?',
  'Could you rest as awareness for a few seconds?'
];

const buttonText = ['Next', 'Yes/No', 'Next', 'Next', 'Next', 'Yes/No'];

function FreeWay(props) {
  const [index, setIndex] = useState(0);

  function handleChangeLocal(event) {
    setIndex(
      index === questions.length - 1 ? props.handleChange(1) : index + 1
    );
  }

  return (
    <div>
      <div>{questions[index]}</div>
      <button onClick={handleChangeLocal}>{buttonText[index]}</button>
    </div>
  );
}

export default FreeWay;
