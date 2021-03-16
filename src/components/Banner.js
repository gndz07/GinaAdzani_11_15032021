import React from 'react';

export default class Banner extends React.Component {
	render() {
		const {imgSrc} = this.props;
		return (
			<img id="banner-img" src={imgSrc} alt="banner" />
		)
	}
}