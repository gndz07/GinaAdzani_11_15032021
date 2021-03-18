import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/error.css'

export default class Error extends React.Component {
	render() {
		return (
			<div id="error-page">
				<div id="error-page-center">
					<h1 id="error-404">404</h1>
					<p id="error-msg">Oups! La page que vous demandez n'existe pas.</p>
				</div>
				<NavLink to="/" id="error-nav">Retourner sur la page d’accueil</NavLink>
			</div>
		)
	}
}