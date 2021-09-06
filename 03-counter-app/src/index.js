import React from "react";
import ReactDom from "react-dom";
import CounterApp from "./CounterApp";
// import FirstApp from "./FirstApp";
import './index.css';


const divRoot = document.querySelector('#root');


// ReactDom.render( <FirstApp greeting='Im Goku' />, divRoot);
ReactDom.render( <CounterApp  value={100}/>, divRoot);


