import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('I render again...');
  return (
    <>
      <button className="btn btn-success" onClick={() => increment()}>
        Increment
      </button>
    </>
  );
});
