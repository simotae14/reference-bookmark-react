import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello World</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

// if you want your app to work OFFLINE and LOAD FASTER
// you can CHANGE UNREGISTER TO REGISTER
serviceWorker.unregister(); 
