import { useLayoutEffect, useRef, useState } from 'react';

export const Card = ({ data }) => {
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  });
  const divRef = useRef();

  useLayoutEffect(() => {
    // Is useful to get the size of the element when the component is rendered
    const { width, height } = divRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [data]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="card" style={{ width: '18rem' }}>
        <img src={data.image} className="card-img-top" alt={data.quote} />
        <div className="card-body">
          <h5 className="card-title">{data.character}</h5>
          <p className="card-text">{data.quote}</p>
        </div>
      </div>
      <blockquote className="blockquote-footer" ref={divRef}>
        {data.quote}
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </div>
  );
};
