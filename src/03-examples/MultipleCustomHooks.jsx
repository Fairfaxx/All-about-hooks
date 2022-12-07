import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasErrors } = useFetch(
    'https://thesimpsonsquoteapi.glitch.me/quotes'
  );

  console.log({ data, isLoading, hasErrors });

  return (
    <>
      <h1>The Simpsons Quotes</h1>
      <hr />

      {isLoading && <h3>Loading data...</h3>}

      {hasErrors && <p>There was an error</p>}

      {data?.map((d) => (
        <div key={d.quote}>
          <h4>{d.character}</h4>
          <p>{d.quote}</p>
        </div>
      ))}
    </>
  );
};
