//contains the logic to make a single input with label

import React from 'react';

export default ({input, label}) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} />
		</div>
	);
};
