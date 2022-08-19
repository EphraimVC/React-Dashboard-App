
import React from 'react';
// we hook the react application to the real dom 
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import { ContextProvider } from './contexts/ContextProvider';

// this hooks the react app to the html div with the id root 
ReactDOM.render(
  
    <ContextProvider>
      <App />
      </ContextProvider>,
  document.getElementById('root'),);


