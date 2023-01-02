import React, { useState, useEffect } from 'react';
import Basic from './Basic';
import Wants from './Wants';
import TripleWelcome from './TripleWelcome';
//
// https://codepen.io/bryantt23/pen/ZEQVEdZ
// https://stackoverflow.com/questions/39210971/this-setstate-is-undefined

function App() {
  const [number, setNumber] = useState(2);
  const [component, setComponent] = useState();

  // https://stackoverflow.com/questions/54069253/the-usestate-set-method-is-not-reflecting-a-change-immediately
  useEffect(() => {
    setComponent(generateComponent(number));
  }, [number]);

  function handleChange(event) {
    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let nextNum = randomIntFromInterval(0, 2);
    while (nextNum === number) {
      nextNum = randomIntFromInterval(0, 2);
    }

    setNumber(nextNum);
  }

  function generateComponent(index) {
    if (index === 0) {
      return <Basic handleChange={handleChange} />;
    } else if (index === 1) {
      return <Wants handleChange={handleChange} />;
    } else {
      return <TripleWelcome handleChange={handleChange} />;
    }
  }

  return (
    <div>
      <br />
      {number}
      <div>{component}</div>
    </div>
  );
}

export default App;
