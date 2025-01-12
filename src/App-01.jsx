import React from 'react';

const ShowAppName = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Welcome to my app : <b>{props.name}</b>
      </h1>
      <p>{props.children}</p>
    </div>
  );
};

export default function App() {
  return (
    <>
      <ShowAppName name="App 1">
        <>Child1</> - <>Child2</>
      </ShowAppName>
      <hr />
      <ShowAppName name="App 2" />
    </>
  );
}
