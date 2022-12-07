import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const resetValue = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    resetValue,
    decrement,
    increment,
  };
};
