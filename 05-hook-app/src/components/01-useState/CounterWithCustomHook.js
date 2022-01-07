import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

function CounterWithCustomHook() {
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>
        Counter With Hook {state}
        <hr />
        <button onClick={() => increment(2)} className="btn ">
          +1
        </button>
        <button onClick={reset} className="btn ">
          reset
        </button>
        <button onClick={() => decrement(1)} className="btn ">
          -1
        </button>
      </h1>
    </>
  );
}

export default CounterWithCustomHook;
