import React from 'react';
import { createRoot } from 'react-dom/client';

// import App from './App-01'; // Simple App
// import App from './App-02-useState';
// import App from './App-03-counterState';
// import App from './App-04-counter-lifeCycle';
// import App from './App-05-simple-expression';
// import App from './App-07';

// import App from './App-100';
// import App from './App-101';
// import App from './App-102';
// import App from './App-103';
// import App from './App-104';
// import App from './App-105'; // Simple list destructured
// import App from './App-106';
// import App from './App-107';
// import App from './App-108-events-todo';
// import App from './App-109';
import App from './App-110';

//2do : StrictMode obligé en prod (Mais double aff en CLI) !
// <React.StrictMode>
const main = <App />;
// </React.StrictMode>
const container = document.getElementById('app');
const root = createRoot(container);
root.render(main);
