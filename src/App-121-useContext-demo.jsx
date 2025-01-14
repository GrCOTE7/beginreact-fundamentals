import React from 'react';
import { useState, createContext, use, useEffect } from 'react';
import { CircleChevronUp, Plus, Minus } from 'lucide-react';

const CounterContext = createContext(null);

export default function App() {
  // State management = useState / useReducer
  // Context = Injecter des données ou de states

  return (
    <>
      <Counter>
        <Decrement />
        <CounterDisplay />
        <Increment />
      </Counter>
      <hr />
      <Counter>
        <CounterDisplay />
        <Increment symbol="CircleChevronUp" />
      </Counter>
    </>
  );
}

const Counter = ({ children }) => {
  const [count, setCount] = useState(10);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <div className="flex items-center gap-4 py-2">{children}</div>
    </CounterContext.Provider>
  );
};

const CounterDisplay = () => {
  const context = use(CounterContext);
  return (
    <p className="border border-neutral bg-base-300 px-4 py-1 w-fit rounded-md font-mono">
      {context.count}
    </p>
  );
};

const Increment = (props) => {
  const context = use(CounterContext);
  return (
    <>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => context.setCount(context.count + 1)}
      >
        {props.symbol !== 'CircleChevronUp' ? <Plus /> : <CircleChevronUp />}
      </button>
      {/* <pre>{JSON.stringify(context, null, 2)}</pre> */}
    </>
  );
};

const Decrement = () => {
  const context = use(CounterContext);
  return (
    <button
      className="btn btn-primary btn-sm"
      onClick={() => context.setCount(context.count - 1)}
    >
      <Minus />
    </button>
  );
};
