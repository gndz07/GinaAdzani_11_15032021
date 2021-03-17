import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js'
import Homepage from './pages/Homepage.js'
import About from './pages/About.js'
import './styles/header.css'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   

    <Router>
    	<div>
    	 <Header />
    		<Switch>
    			<Route exact path='/' component={Homepage} />
    			<Route path='/about' component={About} />
    		</Switch>
    	</div>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
