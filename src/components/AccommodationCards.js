import React from 'react';
import {accommodation} from '../mocks/accommodation-data.js'

export default class AccommodationCards extends React.Component {
	render() {
		return (
			<div id="cards-parent">
			{console.log(accommodation)}
				{accommodation.map(hotel => (
					<div className="hotel-card" key={hotel.id}>
						<img className="hotel-card-img" src={hotel.cover} alt="accommodation"/>
						<h2 className="hotel-card-title">{hotel.title}</h2>
					</div>
				))}
			</div>
		)
	}
}