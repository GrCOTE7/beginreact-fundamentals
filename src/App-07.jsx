import React from 'react';

  const NameForm = () => {
    
    const [name, setName] = React.useState('Lio');
    const uuu= 21
    
    // →Side Effect
    React.useEffect(
      () => {
        // 1. Run Effect
        console.log('useEffect Calling');
        console.log(name, uuu);
        document.title = name;

        // return () => {
        //   // 2. Clean Up Effect
        // };
      },
      [
        // 3. Dependencies
        uuu // effect only re-render when uuu changes → Here: never !
      ]
    );

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
