import React from 'react';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/todos/1',
    fetcher
  );

  return (
    
    <div className="flex flex-wrap gap-4 items-center">
      {/* { console.log('isLoading ?', isLoading)} */}
      {isLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
      {error ? <p>{error.message}</p> : null}
    </div>
    
  );
}
