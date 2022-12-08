import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const UseCallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => {
    // console.log('Do i render increment?');
    // setCounter(counter + 1);
    setCounter((value) => value + 1);
  }, []);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };
  return (
    <>
      <h1>UseCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
