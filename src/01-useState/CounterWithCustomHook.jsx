import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, resetValue } = useCounter(11);
  return (
    <>
      <h1>Counter with Hook: {counter}</h1>

      <hr />

      <button onClick={() => decrement()} className="btn btn-primary">
        -1
      </button>
      <button onClick={() => resetValue()} className="btn btn-danger">
        Reset
      </button>
      <button onClick={() => increment()} className="btn btn-primary">
        +1
      </button>
    </>
  );
};
