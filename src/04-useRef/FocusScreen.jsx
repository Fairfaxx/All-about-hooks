import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();
  const setFocused = () => {
    // document.querySelector('input').select();
    // console.log(inputRef.current);
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        type="text"
        placeholder="Type your name here"
        className="form-control"
        ref={inputRef}
      />

      <button onClick={setFocused} className="btn btn-primary mt-3">
        Set Focus
      </button>
    </>
  );
};
