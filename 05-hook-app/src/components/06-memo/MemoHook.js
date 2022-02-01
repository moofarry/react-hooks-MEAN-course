import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);



  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
  
  return (
    <div>
      <h1>MemoHook</h1>
      <hr />

      <p>{memoProcesoPesado}</p>
      <h3>
        Counter : <small> {counter} </small>
      </h3>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary mr-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
