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
import App from './App-102';

const main = <App />;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(main);
