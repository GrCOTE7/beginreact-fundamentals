import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <button className='btn btn-outline' onClick={() => setCount(count + 1)}>Add : {count}</button>
  );
}
