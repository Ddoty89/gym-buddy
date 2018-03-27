import React from 'react';
import { connect } from 'react-redux';

import {personalStats} from '../actions/stats';

class PersonalStats extends React.Component {
	componentDidMount() {
		this.props.dispatch(personalStats())	
	}

	render() {
		return (
			<div>
				<label htmlFor='weight'>To keep track of your weight enter it here</label>
				<input className='weight' id='weight' type='text' name='weight' placeholder='Current weight' />
				<h3 className='weightDisplay'>Current weight is:</h3>

				<label htmlFor='height'>Input height to calculate standarized BMI</label>
				<input className='height' id='height' type='text' name='height' placeholder='Height' />

				{this.props.stats.map((item, index) => (
					<div key={index} className='statsList'> 
						<br/>
						{
						<ul>
							<li>Height: {item.height}</li>
							<li>Weight: {item.weight}</li>
							<li>Mile time: {item.mileTime}</li>
							<li>Goals: {item.goals}</li>							
							<li>Gender: {item.gender}</li>
							<li>Notes: {item.notes}</li>
						</ul>
						}
						<br/>
					</div>
				))}

			</div>
		)
	}
}

const mapStateToProps = state => ({
	stats: state.reducers.statsReducer.stats
})

export default connect(mapStateToProps)(PersonalStats);