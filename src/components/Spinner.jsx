import React from 'react';
import spinner from '../assets/Spinner.svg';
const Spinner = () => {
	return (
		<div>
			<img src={spinner} alt='loading...' />
		</div>
	);
};

export default Spinner;
