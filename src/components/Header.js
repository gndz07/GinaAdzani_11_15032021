import React from 'react';
import Logo from './Logo.js'


export default class Header extends React.Component{
	render() {
		return (
			<div id="header">
				<Logo />
				<nav id="navbar">
					<a href="#" className="nav-menu">ACCUEIL</a>
					<a href="#" className="nav-menu">A PROPOS</a>
				</nav>
			</div>
		)
		
	}
}