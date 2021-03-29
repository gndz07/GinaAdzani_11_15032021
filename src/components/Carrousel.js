import React from 'react';

export default class Carrousel extends React.Component {
	render() {
		const carouselLength = this.props.pictures.length

		if (carouselLength > 1) {
			return (
				<div id="carousel-main" className="carousel slide" data-interval="false">

					<div className="carousel-inner">
						{this.props.pictures.map((picture, index) => (
							<div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
								<img className="carousel-img" src={picture} alt="property to rent" />
								<div className="carousel-caption">
									<p>{index+1}/{carouselLength}</p>
								</div>
							</div>
						))}
					</div>

					<a className="carousel-control-prev" href="#carousel-main" role="button" data-slide="prev">
						<i className="fa fa-angle-left carousel-arrow" />
						<span className="sr-only">Previous</span>
					</a>

					<a className="carousel-control-next" href="#carousel-main" role="button" data-slide="next">
						<i className="fa fa-angle-right carousel-arrow" />
						<span className="sr-only">Next</span>
					</a>

				</div>
			)
		} else {
			return (
				<div id="carousel-main" className="carousel slide" data-interval="false">

					<div className="carousel-inner">
						{this.props.pictures.map((picture, index) => (
							<div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
								<img className="carousel-img" src={picture} alt="property to rent" />
								<div className="carousel-caption">
									<p>{index+1}/{carouselLength}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)
		}
	
	}
}