import React, { useState } from "react";
import PropTypes from "prop-types";
// import React, { Fragment } from "react";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => setCounter(counter + 1);
  const handleSubbtract = () => setCounter(counter - 1);
  const handleResetCounter = () => setCounter(value);

  return (
    <>
      <h1> CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleSubbtract}>-1</button>
      <button onClick={handleResetCounter}>Reset</button>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
CounterApp.defaultProps = {
  value: 100,
};

export default CounterApp;
