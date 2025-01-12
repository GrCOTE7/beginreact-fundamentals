import React from 'react';

const FriendCard = (props) => {
  console.log(props);
  return (
    !(props.isConfirmed ==false) && 
    <div className="card w-[104px] text-center bg-neutral rounded-md">
      <div className="card-title text-neutral-content mx-auto">
        {props.name}
      </div>
      <p className="card-body p-1 px-2">{props.id}</p>
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
    isConfirmed: false,
  },
  {
    id: '5',
    name: 'Louis',
    isConfirmed: true,
  },
];

export default function App() {
  return (
    <div className="flex flex-wrap justify-evenly gap-3 w-full">
      {FRIENDS.map((friend) => (
        <FriendCard key={friend.id} id={friend.id} name={friend.name} isConfirmed={friend.isConfirmed}/>
      ))}
    </div>
  );
}
