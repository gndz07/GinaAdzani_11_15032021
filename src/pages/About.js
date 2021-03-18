import React from 'react';
import Banner from '../components/Banner.js'
import AboutCollapse from '../components/AboutCollapse.js'
import HeaderImgAbout from '../assets/banner-about.jpg'
import '../styles/banner.css'
import '../styles/about-collapse.css'

export default class About extends React.Component{
	render() {
		return (
			<div id="about-body">
				<div id="banner">
					<Banner bannerId="banner-img-about" imgSrc={HeaderImgAbout} />
				</div>
				<AboutCollapse />
			</div>
		)
		
	}
}