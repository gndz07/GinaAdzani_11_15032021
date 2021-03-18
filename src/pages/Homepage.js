import React from 'react';
import Banner from '../components/Banner.js'
import HeaderImg from '../assets/banner-homepage.jpg'
import AccommodationCards from '../components/AccommodationCards.js'
import '../styles/banner.css'
import '../styles/accommodation-cards.css'

export default class Homepage extends React.Component{
	render() {
		return (
			<div id="homepage-body">
				<div id="banner">
					<Banner bannerId="banner-img-homepage" imgSrc={HeaderImg} />
					<h1 id="tagline">Chez vous, partout et ailleurs</h1>
				</div>
				<AccommodationCards />
			</div>
		)	
	}
}
