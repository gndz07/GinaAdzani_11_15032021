import React from 'react';
import Header from '../components/Header.js'
import Banner from '../components/Banner.js'
import HeaderImg from '../assets/background-homepage.jpg'
import AccommodationCards from '../components/AccommodationCards.js'
import '../styles/header.css'
import '../styles/banner.css'
import '../styles/accommodation-cards.css'

export default class Homepage extends React.Component{
	render() {
		return (
			<div id="homepage-body">
				<Header />
				<div id="banner">
					<Banner imgSrc={HeaderImg} />
					<h1 id="tagline">Chez vous, partout et ailleurs</h1>
				</div>
				<AccommodationCards />
			</div>
		)
		
	}
}
