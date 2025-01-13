import React from 'react';
import { useState, useEffect } from 'react';


const NotificationCount = () => {
  const [count, setCount] = useState(0);
  
  console.log(
    '%c Mount ',
    'background: blue; color:white; padding:2px'
  );
  
  useEffect(() => {
    const originalTitle = document.title;
    
    console.log(
      `%cUseEffect ${count}`,
      'background: yellow; color:black; padding:2px'
    );
    document.title = `Notif ${count}`;
    
    return ()=>{
      
      console.log(
        `%cUseEffect CleanUp ${count}`,
        'background: red; color:white; padding:2px'
      );
      document.title = originalTitle;
      console.log('CleanUp', originalTitle);
    }
  }, [count]);

  return (
    <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

export default function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <input
          type="checkbox"
          className="checkbox-primary checkbox"
          value={checked}
          onChange={(e) => setChecked(e.target.checked)}
        ></input>
        <label>{checked ? 'Hide ' : 'Show'} Notification</label>
      </div>
      {checked ? <NotificationCount /> : null}
    </div>
  );
}
