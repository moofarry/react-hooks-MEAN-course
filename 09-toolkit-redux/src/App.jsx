import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>count is: {counter}</p>
      <img src={logo} className="App-logo" alt="logo" />
      <p>count is: {counter}</p>
      <p>
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button
          type="button"
          onClick={() => dispatch(incrementBy(2))}
        >
          Increment by 2
        </button>
      </p>
    </div>
  );
}

export default App;
