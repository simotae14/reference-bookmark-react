import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1>Hello World</h1>
    </div>  
    {/* React.createElement('h1', {
      className: 'title'
    }, 'Hello World') */}
  </React.StrictMode>,
  document.getElementById('root')
);

// if you want your app to work OFFLINE and LOAD FASTER
// you can CHANGE UNREGISTER TO REGISTER
serviceWorker.unregister(); 
