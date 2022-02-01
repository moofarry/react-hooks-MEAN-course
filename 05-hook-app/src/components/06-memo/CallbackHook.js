import React, { useCallback, useState } from "react";
import {ShowIncrement} from './ShowIncrement'
import "../02-useEffect/effects.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
    
  const increment = useCallback((num) => {
    setCounter( c => c + num);
  }, [setCounter]);
  
  //es posible aplicar useCallback como dependencia en un useEffect

  return (
    <div>
      <h1>useCallback: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment}/>
    </div>
  );
};
