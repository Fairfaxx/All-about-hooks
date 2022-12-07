import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
    hasErrors: null,
  });

  const getQuotes = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setState({
        data,
        isLoading: false,
        hasErrors: false,
      });
    } catch (error) {
      setState({
        data,
        isLoading: false,
        hasErrors: true,
      });
      console.log(error.message);
      throw new Error(error.message);
    }
  };

  const { data, isLoading, hasErrors } = state;

  useEffect(() => {
    getQuotes();
  }, []);

  return { data, isLoading, hasErrors };
};
