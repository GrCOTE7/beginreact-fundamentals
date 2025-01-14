import React from 'react';
import { useState, useEffect } from 'react';

export default function App() {
  const [checked, setChecked] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!checked) return;

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    console.log('Add Event Listener');
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      console.log('Remove Event Listener');
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [checked]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <input
          type="checkbox"
          className="checkbox-primary checkbox"
          value={checked}
          onChange={(e) => setChecked(e.target.checked)}
        ></input>
        <label>{checked ? 'Disable ' : 'Enable'} on mouse move</label>
      </div>
      <pre>{JSON.stringify(mousePosition, null, 2)}</pre>
    </div>
  );
}
