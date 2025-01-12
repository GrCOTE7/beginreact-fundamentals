import React from 'react';

// Réf.ce: https://www.youtube.com/watch?v=eKYkDqHohrw&ab_channel=Melvynx%E2%80%A2Apprendre%C3%A0coder

// https://www.babeljs.io

const SimpleText = () => {
  const jsx = <div className="border-2 rounded-lg border-orange-400 p-2 py-1">
    <h1 className="text-xl font-bold text-cyan-400">Component</h1>
    <p className="text-justify">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae
    earum at quibusdam eius obcaecati molestiae exercitationem explicabo.
    </p>
    </div>;
  console.log({ jsx });
  return jsx;
};

export default function App() {
  console.log('Start');
  return (
    <SimpleText />
  );
}
