import React from 'react';

export default class Collapse extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	items: props.data,
        };
        this.handleClick = this.handleClick.bind(this);
    }

	handleClick = (id) => {
		const updatedItems = this.state.items.map(item => {
			if (item.id === id) {
				return {
					...item,
					expanded: !item.expanded,
				};
			} else {
				return item;
			}
		});

		this.setState({
			items: updatedItems,
		});
	}

	render() {
		return (
			<div className="container">
				<div id="accordion">

					{this.state.items.map((collapse, index) => (
						<div className="card" key={`collapse${index}`}>
			    			<div className="card-header" id={`heading${index}`}>
			        			
			        				<button className={ `btn btn-link accordion-btn ${collapse.expanded ? "collapsed" : ""}` } onClick={() => this.handleClick(collapse.id)} aria-controls={`#collapse${index}`}>
			            				{collapse.title}
			            				<i className="fa" />
			        				</button>
			        			
			    			</div>
			    			<div id={`collapse${index}`} className={ `collapse ${collapse.expanded ? "show" : ""}` } aria-labelledby={`heading${index}`} data-parent="#accordion">
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