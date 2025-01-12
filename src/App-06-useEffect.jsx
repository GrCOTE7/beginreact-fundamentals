import React from 'react';

export default function App() {
  
  React.useEffect(() => { // →Side Effect
    // 1. Run Effect
    console.log('useEffect Calling');
    document.title='New title';

    return () => {
      // 2. Clean Up Effect
    }
  }, [
    // 3. Dependencies
  ]);
  
  return (
    <>
      <h1>useEffect</h1>
    </>
  );
}
