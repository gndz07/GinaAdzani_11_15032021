import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Homepage from '../pages/Homepage.js'
import About from '../pages/About.js'
import Error from '../pages/Error.js'
import Accommodation from '../pages/Accommodation.js'
import '../styles/header.css'
import '../styles/footer.css'

export default class KasaRouter extends React.Component {
	render() {
		return (
			<Router>
    			<div>
		    		<Header />
		    		<Switch>
		    			<Route exact path='/' component={Homepage} />
		    			<Route path='/about' component={About} />
		    			<Route path='/accommodation/:accommodationId' component={Accommodation} />
		    			<Route component={Error} />
		    		</Switch>
		    		<Footer />
		    	</div>
    		</Router>
		)
	}
}