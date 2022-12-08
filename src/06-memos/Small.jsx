import { memo } from 'react';

export const Small = memo(({ counter }) => {
  console.log("I'm here!");
  return (
    <>
      <small>{counter}</small>
    </>
  );
});
