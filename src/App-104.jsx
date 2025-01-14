import React from 'react';

const Friend = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

const FRIENDS = [
  {
    id: '1',
    name: 'Pier',
  },
  {
    id: '2',
    name: 'Pol',
  },
  {
    id: '3',
    name: 'Jack',
  },
];

export default function App() {
  console.log('go !');
  return (
    <div className="flex flex-wrap justify-evenly gap-3 w-full">
      <div>
        
      {FRIENDS.map((friend) => (
        <p key={friend.id}>{friend.name} </p>
      ))}
      </div>
      <div>
      {FRIENDS.map((friend) => (
        <p key={friend.id}>{...friend.id}</p>
      ))}
      </div>
    </div>
  );
}
