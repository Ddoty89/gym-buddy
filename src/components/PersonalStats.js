import React from 'react';

export default function PersonalStats(props) {
	return (
		<div>
			<label htmlFor='weight'>To keep track of your weight enter it here</label>
			<input className='weight' id='weight' type='text' name='weight' placeholder='Current weight' />
			<h3 className='weightDisplay'>Current weight is:</h3>

			<label htmlFor='height'>Input height to calculate standarized BMI</label>
			<input className='height' id='height' type='text' name='height' placeholder='Height' />
		</div>
	)
}