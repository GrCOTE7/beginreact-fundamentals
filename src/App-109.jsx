import React from 'react';
import { useState } from 'react';


const initialState = () => {
  console.log('initialState');
  return Math.floor(Math.random() * 100);
}
export default function App() {
  
  const [count, setCount] = useState(()=>initialState());
  // Une fonction pour n'appeler l'initialState() qu'au 1er render
  console.log(count);

/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Increment the count state by 1 when the button is clicked.
   */
/******  c2ffed50-f11f-4892-aaf0-ca881438ce45  *******/
  const handleClick = () => {
    // console.log('Clicked !');
    setCount(count + 1);
  };

  return (
    <div>
      <button id="test_id" onClick={handleClick} className="btn btn-outline">
        Click me {count}
      </button>
    </div>
  );
}
