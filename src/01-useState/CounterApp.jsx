import { useState } from 'react';

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;
  console.log(counter1);

  return (
    <>
      <h3>Counter: {counter1}</h3>
      <h3>Counter: {counter2}</h3>
      <h3>Counter: {counter3}</h3>

      <hr />

      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...counter,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
