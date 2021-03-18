import React from 'react';
import AccommodationHead from '../components/AccommodationHead.js'
import {accommodation} from '../mocks/accommodation-data.js'
import '../styles/accommodation-head.css'

export default class Accommodation extends React.Component{
	state = {
		item: accommodation.find((hotel) => hotel.id === this.props.match.params.accommodationId),
	};

	render() {
		return (
			<div id="page-body">

				<AccommodationHead item={this.state.item} />

			</div>
		)
		
	}
}