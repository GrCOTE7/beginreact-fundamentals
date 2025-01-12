import React from 'react';
import { Rabbit } from 'lucide-react';

const ShoeCard = (props) => {};

export default function App() {
  return (
    <div className="flex flex-wrap justify-evenly gap-3 w-full">
      <Rabbit size="36" color="blue" />
      <Rabbit size="36" color="white" />
      <Rabbit size="36" color="red" />
    </div>
  );
}
