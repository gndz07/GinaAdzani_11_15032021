import React from 'react';
import AccommodationHead from '../components/AccommodationHead.js'
import AccommodationDesc from '../components/AccommodationDesc.js'
import Carrousel from '../components/Carrousel.js'
import {accommodation} from '../mocks/accommodation-data.js'
import '../styles/accommodation-head.css'
import '../styles/accommodation-desc.css'
import '../styles/carrousel.css'

export default class Accommodation extends React.Component{
	state = {
		item: accommodation.find((hotel) => hotel.id === this.props.match.params.accommodationId),
	};

	render() {
		return (
			<div id="accommodation-page">
				<Carrousel pictures={this.state.item.pictures} />
				<AccommodationHead item={this.state.item} />
				<AccommodationDesc item={this.state.item} />
			</div>
		)
	}
}