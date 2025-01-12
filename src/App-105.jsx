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
  {
    id: '4',
    name: 'Juda',
    isConfirmed: false
  },
  {
    id: '5',
    name: 'Louis',
    isConfirmed: true
  },
];

export default function App() {
  return (
    <div className="flex flex-wrap justify-evenly gap-3 w-full">
      {FRIENDS.map((friend) => (
        (friend.isConfirmed!==false) ? (<p key={friend.id}>{friend.id} - {friend.name}</p>) : null
      ))}
    </div>
  );
}
