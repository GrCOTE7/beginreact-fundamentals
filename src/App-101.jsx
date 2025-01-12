import React from 'react';

const Component = (props) => {
  const jsx = (
    <div className="w-[104px] text-center">
      <p className="bg-neutral text-neutral-content p-1 px-2 rounded">{props.nameFor.toUpperCase()}</p>
    </div>
  );
  console.log({ jsx });
  return jsx;
};

export default function App() {
  return (
    <div className="flex flex-wrap justify-evenly gap-3 w-full">
      <Component nameFor="a" />
      <Component nameFor="b" />
      <Component nameFor="c" />
      <Component nameFor="d" />
      <Component nameFor="e" />
    </div>
  );
}
