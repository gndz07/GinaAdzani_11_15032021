import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from './Logo.js'


export default class Header extends React.Component{
	render() {
		return (
			<div id="header">
				<Logo />
				<nav id="navbar">
					<NavLink to='/' className="nav-menu" exact={true}>Accueil</NavLink>
					<NavLink to='/about' className="nav-menu">A Propos</NavLink>
				</nav>
			</div>
		)
		
	}
}