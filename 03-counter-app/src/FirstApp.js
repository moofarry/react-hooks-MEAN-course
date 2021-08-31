import React from "react";
import PropTypes from "prop-types";
// import React, { Fragment } from "react";

const FirstApp = ({ greeting,subtitle }) => {


  return (
    <>
      <h1> {greeting} </h1>
      {/* <pre>{JSON.stringify(greeting, null, 3)}</pre>  */}
      <p> {subtitle} </p>
    </>
  );
};

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
  subtitle : 'Im sub-Title'
}

export default FirstApp;
