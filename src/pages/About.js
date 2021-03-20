import React from 'react';
import Banner from '../components/Banner.js'
import Collapse from '../components/Collapse.js'
import HeaderImgAbout from '../assets/banner-about.jpg'
import {about} from '../mocks/about.js'
import '../styles/banner.css'
import '../styles/collapse.css'

export default class About extends React.Component{
	render() {
		return (
			<div id="about-body">
				<div id="banner">
					<Banner bannerId="banner-img-about" imgSrc={HeaderImgAbout} />
				</div>
				<Collapse data={about} />
			</div>
		)
	}
}