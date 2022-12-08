import { useEffect, useLayoutEffect, useRef } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Card } from './Card';

export const Layout = () => {
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
        <Card data={d} key={d.quote} />
      ))}

      {data && !isLoading && (
        <button className="btn btn-primary mt-3" onClick={onLoadMore}>
          Load more!
        </button>
      )}
    </>
  );
};
