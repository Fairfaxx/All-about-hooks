import { useEffect, useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

const heavyStuff = (iterationNumber) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log(iterationNumber, 'Here we go...');
    return `${iterationNumber} iterations done `;
  }
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(3000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>Memo Hook!</h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <h2>
        Counter: <small>{counter}</small>
      </h2>

      <button className="btn btn-success" onClick={() => increment()}>
        + 1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
