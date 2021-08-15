import React from "react";
import ReactDom from "react-dom";
import FirstApp from "./FirstApp";
import './index.css';


const divRoot = document.querySelector('#root');


ReactDom.render( <FirstApp />, divRoot);


