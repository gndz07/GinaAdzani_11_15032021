import React from 'react';

export default class AccommodationDesc extends React.Component {
	render() {
		return(
			<div className="container">
				<div id="accordion">
					<div className="card">
				    	<div className="card-header" id="headingOne">
				        	<h5 className="mb-0">
				        		<button className="btn btn-link collapsed accordion-btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
				            		Description
				            		<i className="fa" aria-hidden="true"></i>
				        		</button>
				        	</h5>
				    	</div>

				    	<div id="collapseOne" className="collapse" aria-labelledby="headingOne">
				        	<div className="card-body">
				          		{this.props.item.description}
				        	</div>
				      	</div>
			    	</div>

			    	<div className="card">
				    	<div className="card-header" id="headingTwo">
				        	<h5 className="mb-0">
				        		<button className="btn btn-link collapsed accordion-btn" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
				            		Équipements
				            		<i className="fa" aria-hidden="true"></i>
				        		</button>
				        	</h5>
				    	</div>

				    	<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
				        	<div className="card-body">
				          		<ul id="container-equipments">
				          			{this.props.item.equipments.map((equip) => (
										<li className="equipment-item" key={equip}>{equip}</li>
									))}
				          		</ul>
				        	</div>
				      	</div>
			    	</div>
				</div>
			</div>
		)
	}
}