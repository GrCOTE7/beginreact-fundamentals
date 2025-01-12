// import { log } from './tools/helpers.js'

const main = (
  <label htmlFor="name">
    Test:
    <input
      id="name"
      className="input input-bordered ml-3 italic"
      placeholder="Input field"
    />
  </label>
);

const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(main);
