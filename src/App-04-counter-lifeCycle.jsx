import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  console.log('[Render] count =', count);

  const increment = () => {
    setCount((curr) => curr + 1);
    setCount((curr) => curr + 1);
    setCount((curr) => curr + 1);
    console.log('[Increment] count =', count);
  };

  return <button onClick={() => increment()}>Count : {count}</button>;
};

export default function App() {
  return <Counter />;
}
