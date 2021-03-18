import React from 'react';
import Logo from './Logo.js'

export default class Footer extends React.Component {
	render() {
		return (
			<footer id="footer">
				<div id="footer-content">
					<Logo />
					<p className="footer-text">&copy; {(new Date().getFullYear())} Kasa. All rights reserved</p>
				</div>
			</footer>
		)
	}
}