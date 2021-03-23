import React from 'react';
import ReactDOM from 'react-dom';
import KasaRouter from './apps/Router.js'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <KasaRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
