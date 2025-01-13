import React from 'react';

export default function App() {
  const handleClick = () => {
    console.log('click');
  };
  return (
    <div>
      <Todo onDelete={() => console.log('App delete')} />
      <button id="test_id" onClick={handleClick} className="btn btn-outline">
        Click me
      </button>
    </div>
  );
}

const Todo = (props) => {
  console.log(props);
  return (
    <div className="flex items-center gap-4">
      <p>Faire des courses</p>
      <button
        id="test_id"
        className="btn btn-error btn-sm"
        onClick={() => {
          console.log('delete')
          props.onDelete?.()
        }}
      >
        Delete
      </button>
    </div>
  );
};
