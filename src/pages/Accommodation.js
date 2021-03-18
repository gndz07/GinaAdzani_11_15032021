import React from 'react';
import AccommodationHead from '../components/AccommodationHead.js'
import AccommodationDesc from '../components/AccommodationDesc.js'
import {accommodation} from '../mocks/accommodation-data.js'
import '../styles/accommodation-head.css'
import '../styles/accommodation-desc.css'

export default class Accommodation extends React.Component{
	state = {
		item: accommodation.find((hotel) => hotel.id === this.props.match.params.accommodationId),
	};

	render() {
		return (
			<div id="accommodation-page">

				<AccommodationHead item={this.state.item} />
				<AccommodationDesc item={this.state.item} />

			</div>
		)
		
	}
}