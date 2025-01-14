import React from 'react';
import { useState, createContext, use, useEffect } from 'react';

const UserContext = createContext(null);

export default function App() {
  // State management = useState / useReducee
  // Context = Injecter des données ou de states
  return (
    <UserContext.Provider value={{ count: 111, name: 'Lionel' }}>
      <User />
    </UserContext.Provider>
  );
}

const User = () => {
  const user = use(UserContext);
  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>Salut, {user.name} !</p>
    </>
  );
};
