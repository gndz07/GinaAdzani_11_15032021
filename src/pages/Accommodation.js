import React from 'react';
import AccommodationHead from '../components/AccommodationHead.js'
import Collapse from '../components/Collapse.js'
import Carrousel from '../components/Carrousel.js'
import {accommodation} from '../mocks/accommodation-data.js'
import '../styles/accommodation-head.css'
import '../styles/collapse.css'
import '../styles/carrousel.css'

export default class Accommodation extends React.Component{
	constructor(props) {
    	super(props);
   		this.state = {
   			item: accommodation.find((hotel) => hotel.id === this.props.match.params.accommodationId),
   		};
  	}

	render() {
		const descriptions= [
   				{
   					title: "Description",
   					content: [this.state.item.description]
   				},
   				{
   					title: "Équipements",
   					content: this.state.item.equipments
   				}
   			]

		return (
			<div id="accommodation-page">
				<Carrousel pictures={this.state.item.pictures} />
				<AccommodationHead item={this.state.item} />
				<Collapse data={descriptions} />
			</div>
		)
	}
}