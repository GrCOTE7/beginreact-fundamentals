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
  let color = count % 2 === 0 ? 'green' : 'red';
  
  return <button onClick={() => increment()}>Count: <span className={`text-${color}-500 ml-3`}>{count}</span></button>;
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
