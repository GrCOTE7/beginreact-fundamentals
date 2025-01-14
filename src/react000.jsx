import React from 'react';
import { createRoot } from 'react-dom/client';

// import App from './App-01'; // Simple App

// import App from './App-02-useState';
// import App from './App-03-counterState';
// import App from './App-04-counter-lifeCycle';
// import App from './App-05-simple-expression';

// import App from './App-06-useEffect';
// import App from './App-07';
// import App from './App-100';
// import App from './App-101';
// import App from './App-102';
// import App from './App-103';
// import App from './App-104';
// import App from './App-105'; // Simple list no destructured
// import App from './App-106';
// import App from './App-107';
// import App from './App-108-events-todo';
// import App from './App-109';
// import App from './App-110';
// import App from './App-111-useState-todos';
// import App from './App-112-useEffect';
// import App from './App-113-useEffect-CleanUp';
// import App from './App-114-2-useEffects';
// import App from './App-115-useEffect-MousePosition';
// import App from './App-116-useEffect-click';
// import App from './App-117-fetch-with-swr';
// import App from './App-118-cache-with-swr';

// import App from './App-120-useContext';
import App from './App-121-useContext-demo';

//2do : StrictMode obligé en prod (Mais double aff en CLI) !
  const main = <App />;

const container = document.getElementById('app');
const root = createRoot(container);
{/* <React.StrictMode> */}
root.render(main);
{/* </React.StrictMode> */}
