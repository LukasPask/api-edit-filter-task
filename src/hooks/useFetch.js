import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  // Hooks
  // State
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  //   Side effects
  // Fetching data from API
  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.err);
        setIsLoading(false);
      });
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useFetch;
