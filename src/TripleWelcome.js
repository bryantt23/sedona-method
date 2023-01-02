import React, { useState } from 'react';

const questions = [
  'What is your now feeling?',
  'Could you welcome this feeling?',
  'Could you welcome any wanting to change this?',
  'Could you welcome taking this personally?',
  "Could you notice what's here right now?"
];

function TripleWelcome(props) {
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(true);

  function handleChangeLocal(event) {
    setIndex(
      index === questions.length - 1 ? props.handleChange(2) : index + 1
    );
    setStart(index === 0 ? true : false);
  }

  return (
    <div>
      <div>{questions[index]}</div>
      <button onClick={handleChangeLocal}>{start ? 'Next' : 'Yes/No'}</button>
    </div>
  );
}

export default TripleWelcome;
