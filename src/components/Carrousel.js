import React from 'react';

export default class Carrousel extends React.Component {
	render() {
		return (
			<div id="carousel-main" className="carousel slide" data-interval="false">

				<ol className="carousel-indicators">
					{this.props.pictures.map((picture, index) => (
						<li data-target="#carousel-main" data-slide-to={index} className={index === 0 ? "active" : ""} key={index}></li>
					))}
				</ol>

				<div className="carousel-inner">
					{this.props.pictures.map((picture, index) => (
						<div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
							<img className="carousel-img" src={picture} alt="property to rent" />
						</div>
					))}
				</div>

				<a className="carousel-control-prev" href="#carousel-main" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>

				<a className="carousel-control-next" href="#carousel-main" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>

			</div>
		)
	}
}