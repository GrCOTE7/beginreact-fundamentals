// import { log } from './tools/helpers.js'

const main = (
  <label htmlFor="name">
    Test:
    <input id="name" />
  </label>
); 


const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(main);
