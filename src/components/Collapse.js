import React from 'react';

export default class Collapse extends React.Component {

	handleClick = (id) => {
		document.getElementById(id).classList.toggle("collapsed");
		document.getElementById(id).parentElement.nextSibling.classList.toggle("show")
	}

	render() {
		return (
			<div className="container">
				<div id="accordion">

					{this.props.data.map((collapse, index) => (
						<div className="card" key={`collapse${index}`}>
			    			<div className="card-header" id={`heading${index}`}>
			        			
			        				<button id={`button${index}`} className="btn btn-link collapsed accordion-btn" onClick={() => this.handleClick(`button${index}`)} aria-controls={`#collapse${index}`}>
			            				{collapse.title}
			            				<i className="fa" />
			        				</button>
			        			
			    			</div>
			    			<div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`} data-parent="#accordion">
			        			<div className="card-body">
			          				{collapse.content.map((item) => (
			          					<li key={item}>{item}</li>
			          				))}
			        			</div>
			      			</div>
			    		</div>
					))}


				</div>
			</div>
		)
	}
}