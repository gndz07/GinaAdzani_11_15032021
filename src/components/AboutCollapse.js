import React from 'react';

export default class AboutCollaps extends React.Component{
	render() {
		return (
			<div className="container">
			  <div id="accordion">
			    <div className="card">
			    	<div className="card-header" id="headingOne">
			        	<h5 className="mb-0">
			        		<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
			            		Fiabilité
			            		<i className="fa" aria-hidden="true"></i>
			        		</button>
			        	</h5>
			    	</div>
			    	<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
			        	<div className="card-body">
			          		Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
			        	</div>
			      	</div>
			    </div>

			    <div className="card">
			    	<div className="card-header" id="headingTwo">
			        	<h5 className="mb-0">
			        		<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
			            		Respect
			            		<i className="fa" aria-hidden="true"></i>
			        		</button>
			        	</h5>
			    	</div>
			    	<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
			        	<div className="card-body">
			          		La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
			        	</div>
			      	</div>
			    </div>

			    <div className="card">
			    	<div className="card-header" id="headingThree">
			        	<h5 className="mb-0">
			        		<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			            		Service
			            		<i className="fa" aria-hidden="true"></i>
			        		</button>
			        	</h5>
			    	</div>
			    	<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
			        	<div className="card-body">
			          		Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
			        	</div>
			      	</div>
			    </div>

			    <div className="card">
			    	<div className="card-header" id="headingFour">
			        	<h5 className="mb-0">
			        		<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
			            		Sécurité
			            		<i className="fa" aria-hidden="true"></i>
			        		</button>
			        	</h5>
			    	</div>
			    	<div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
			        	<div className="card-body">
			          		La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
			        	</div>
			      	</div>
			    </div>


			  </div>
			</div>
		)
	}
}