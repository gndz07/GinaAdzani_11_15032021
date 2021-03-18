import React from 'react';

export default class AccommodationHead extends React.Component {
	render() {
		return (
			<div id="accommodation-head">
				<div id="accommodation-head-left">
					<h1 id="accommodation-title">{this.props.item.title}</h1>
					<h2 id="accommodation-location">{this.props.item.location}</h2>

					<ul id="accommodation-tags">
						{this.props.item.tags.map((tag) => (
							<li className="accommodation-tag" key={tag}>{tag}</li>
						))}
					</ul>
				</div>

				<div id="owner">
					<p>star rating</p>
					<div id="accommodation-owner">
						<p id="accommodation-owner-name">{this.props.item.host.name}</p>
						<img src={this.props.item.host.picture} alt={this.props.item.host.name} id="accommodation-owner-photo" />
					</div>
				</div>
			</div>
		)
	}
}