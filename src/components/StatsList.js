import React from 'react';
import { connect } from 'react-redux'

import {personalStats} from '../actions/stats';

class StatsList extends React.Component {
	componentDidMount() {
		this.props.dispatch(personalStats())
	}

	render() {
		return (
			<div>
				{this.props.stats.map((item, index) => (
					<div key={index} className='statsList'> 
						<br/>
						{
						<ul>
							<li>Weight: {item.weight}</li>
							<li>Mile time: {item.mileTime}</li>
							<li>Goals: {item.goals}</li>							
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

export default connect(mapStateToProps)(StatsList)



