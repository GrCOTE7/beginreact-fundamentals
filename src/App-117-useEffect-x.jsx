import React from 'react';
import { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();
    setTimeout(async () => {
      console.log('FETCH Effect');
      await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        signal: abortController.signal,
      })
        .then((response) => response.json())
        .then((json) => setData(json))
        .finally(() => setIsLoading(false));
      return () => {
        abortController.abort();
      };
    }, 1000);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 items-center">
      {console.log('isLoading ?', isLoading)}
      {isLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
