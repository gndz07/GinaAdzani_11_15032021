import React from 'react';

export default class Collapse extends React.Component {

	handleClick = (e) => {
		e.stopPropagation()
		e.target.classList.toggle("collapsed");
		e.target.parentElement.nextSibling.classList.toggle("show")
	}

	handleClickArrow = (e) => {
		e.stopPropagation()
		e.target.parentElement.classList.toggle("collapsed");
		e.target.parentElement.parentElement.nextSibling.classList.toggle("show")
	}

	render() {

		return (
			<div className="container">
				<div id="accordion">

					{this.props.data.map((collapse, index) => (
						<div className="card" key={`collapse${index}`}>
			    			<div className="card-header" id={`heading${index}`}>
			        			
			        				<button className="btn btn-link collapsed accordion-btn" onClick={this.handleClick} aria-controls={`#collapse${index}`}>
			            				{collapse.title}
			            				<i className="fa" onClick={this.handleClickArrow} />
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