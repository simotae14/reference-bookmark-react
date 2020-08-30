import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';

import './index.css';

const appTitle = 'My Perfect App!';
const appNumber = 10;

ReactDOM.render(
  <React.StrictMode>
     <App title={appTitle} magicNum={appNumber} />
  </React.StrictMode>,
  document.getElementById('root')
);

// if you want your app to work OFFLINE and LOAD FASTER
// you can CHANGE UNREGISTER TO REGISTER
serviceWorker.unregister(); 
