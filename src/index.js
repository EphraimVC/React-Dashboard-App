
import React from 'react';
// we hook the react application to the real dom 
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

// this hooks the react app to the html div with the id root 
ReactDOM.render(<App />, document.getElementById('root'));
