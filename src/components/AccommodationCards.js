import React from 'react';
import {NavLink} from "react-router-dom";
import {accommodation} from '../mocks/accommodation-data.js'

export default class AccommodationCards extends React.Component {
	render() {
		return (
			<div id="cards-parent">
			{console.log(accommodation)}
				{accommodation.map(hotel => (
					<NavLink to={`/accommodation/${hotel.id}`} key={hotel.id}>
						<div className="hotel-card" key={hotel.id}>
							<img className="hotel-card-img" src={hotel.cover} alt={hotel.title}/>
							<h2 className="hotel-card-title">{hotel.title}</h2>
						</div>
					</NavLink>
				))}
			</div>
		)
	}
}