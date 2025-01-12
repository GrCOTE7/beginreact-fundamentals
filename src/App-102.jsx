import React from 'react';

const Component = (props) => {
  const styleTxt = 'bg-neutral p-1 px-2 rounded';
  const textColor = `text-${props.textColor}-500`;
  const jsx = (
    <div className="w-[104px] text-center">
      <p className={styleTxt + ' ' + textColor}>{props.children}</p>
    </div>
  );
  console.log({ props });
  return jsx;
};

export default function App() {
  return (
    <div className="flex flex-wrap justify-evenly gap-3 w-full">
      <Component textColor="blue">Un</Component>
      <Component textColor="white">Deux</Component>
      <Component textColor="red">Trois</Component>
      <Component textColor="white">Quatre</Component>
      <Component textColor="blue">Cinq</Component>
    </div>
  );
}
