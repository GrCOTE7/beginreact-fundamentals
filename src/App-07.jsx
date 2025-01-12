import React from 'react';

  const NameForm = () => {
    
    const [name, setName] = React.useState('');
    
    document.title = `Hi, ${(name || name.length >0) ? name: "?"}`;
    
    // →Side Effect
    // React.useEffect(
    //   () => {
    //     // 1. Run Effect
    //     console.log('useEffect Calling');
    //     console.log(name);
    //     document.title = `Hi, ${name}`;

    //     return () => {
    //       // 2. Clean Up Effect
    //       console.log('Before effect', name);
    //     };
    //   },
    //   [
    //     // 3. Dependencies
    //     name
    //   ]
    // );

    return (
      <div className="flex flex-col items-center justify-center">
        <div className="card w-full max-w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Name :</h2>
            {name ? (
              <p style={{ color: 'cyan' }}>{name}</p>
            ) : (
              <p style={{ color: 'red' }}>Unknown</p>
            )}
          </div>
        </div>
        <div className="divider">Form</div>
        <label
          htmlFor="name"
          className="input input-bordered flex items-center gap-2"
        >
          <input type="text" id="name" className="grow" placeholder="Name ?" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
    );
  };
  export default function App() {
    
  return (
    <div>
      <NameForm />
    </div>
  )
}
