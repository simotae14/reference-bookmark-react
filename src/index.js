import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';

import './index.scss';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';

ReactDOM.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// if you want your app to work OFFLINE and LOAD FASTER
// you can CHANGE UNREGISTER TO REGISTER
serviceWorker.unregister(); 
