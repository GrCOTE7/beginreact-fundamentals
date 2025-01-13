import React from 'react';
import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Lionel');

  // document.title=count;

  useEffect(() => {
    console.log ({count});
    document.title = count;
  }, [name]); // Définit le tableau de dépendances
  // Sans cela, le render du doc.title se fait quelque soit l'element updated

  return (
    <div className="flex flex-wrap gap-4">
      <input
        type="text"
        className="input input-bordered"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
}
