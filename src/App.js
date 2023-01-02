import React, { useState, useEffect } from 'react';
import Basic from './Basic';
import Wants from './Wants';
import TripleWelcome from './TripleWelcome';
import FreeWay from './FreeWay';
import './App.css';

// https://codepen.io/bryantt23/pen/ZEQVEdZ
// https://stackoverflow.com/questions/39210971/this-setstate-is-undefined

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const maxNum = 3;
function App() {
  const [number, setNumber] = useState(0);
  const [component, setComponent] = useState();

  // https://stackoverflow.com/questions/54069253/the-usestate-set-method-is-not-reflecting-a-change-immediately
  useEffect(() => {
    setComponent(generateComponent(number));
  }, [number, generateComponent]);

  function handleChange(event) {
    let nextNum = randomIntFromInterval(0, maxNum);
    while (nextNum === number) {
      nextNum = randomIntFromInterval(0, maxNum);
    }

    setNumber(nextNum);
  }

  function generateComponent(index) {
    if (index === 0) {
      return <Basic handleChange={handleChange} />;
    } else if (index === 1) {
      return <Wants handleChange={handleChange} />;
    } else if (index === 2) {
      return <TripleWelcome handleChange={handleChange} />;
    } else if (index === 3) {
      return <FreeWay handleChange={handleChange} />;
    }
  }

  return <>{component}</>;
}

export default App;
