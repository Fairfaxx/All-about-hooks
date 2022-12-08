import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasErrors, onLoadMore } = useFetch(
    'https://thesimpsonsquoteapi.glitch.me/quotes'
  );

  return (
    <>
      <h1>The Simpsons Quotes</h1>
      <hr />

      {isLoading && (
        <h3 className="alert alert-info text-center">Loading data...</h3>
      )}

      {hasErrors && <p>There was an error</p>}

      {data?.map((d) => (
        <div key={d.quote}>
          <div className="card" style={{ width: '18rem' }}>
            <img src={d.image} className="card-img-top" alt={d.quote} />
            <div className="card-body">
              <h5 className="card-title">{d.character}</h5>
              <p className="card-text">{d.quote}</p>
            </div>
          </div>
        </div>
      ))}

      {data && !isLoading && (
        <button className="btn btn-primary mt-3" onClick={onLoadMore}>
          Load more!
        </button>
      )}
    </>
  );
};
