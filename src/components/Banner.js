import React from 'react';

export default class Banner extends React.Component {
	render() {
		return (
			<img id={this.props.bannerId} src={this.props.imgSrc} alt="banner" />
		)
	}
}