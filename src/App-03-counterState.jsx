import React from 'react';

const Counter = () => {
  //State
  const [count, setCount] = React.useState(0);
  console.log('[Render] count =', count);

  // Event
  const increment = () => {
    setCount(count + 1);
    console.log('[Increment] Counter = ', count);
  };

  // Render
  return <button onClick={() => increment()}>Count: {count}</button>;
};

export default function App() {
  //State
  const [show, setShow] = React.useState(0);
  console.log({ show });

  // Event

  // Render
  return (
    <div>
      <button className="btn btn-outline" onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      <span className="m-3">{show ? <Counter /> : null}</span>
    </div>
  );
}
