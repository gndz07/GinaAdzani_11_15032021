import React from 'react';
import letterK from '../assets/letter_K.png';
import letterAHome from '../assets/letter_A_maison.png';
import letterS from '../assets/letter_S.png';
import letterA from '../assets/letter_A.png';

export default class Logo extends React.Component {
	render() {
		return <div id="kasa-logo">
			<img id="letter-k" src={letterK} alt="letter K" />
			<img id="letter-a-home" src={letterAHome} alt="letter A styled as a home icon" />
			<img id="letter-s" src={letterS} alt="letter S" />
			<img id="letter-a" src={letterA} alt="letter A" />
		</div>
	}
}