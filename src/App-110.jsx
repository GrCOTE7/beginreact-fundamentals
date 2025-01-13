import React from 'react';
import { useState } from 'react';

export default function App() {
  
  const [count, setCount] = useState(10);
  // Une fonction pour n'appeler l'initialState() qu'au 1er render
  console.log(count);

  const handleClick = () => {
    setCount((current)=> current + 1);
    setCount((current)=> current + 1);
  };

  return (
    <div>
      <button id="test_id" onClick={handleClick} className="btn btn-outline">
        Click me {count}
      </button>
    </div>
  );
}
