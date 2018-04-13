import React from 'react';
import { connect } from 'react-redux'

import {personalStats} from '../actions/stats';
import './StatsList.css'

class StatsList extends React.Component {
	componentDidMount() {
		this.props.dispatch(personalStats())
	}

	render() {
		return (
			<div>
				<div className='user'>
					The current user <span className='userNameDis'>{this.props.user.username}</span>'s most recent stats:
				</div>
				{this.props.stats.map((item, index) => (
					<div key={index} className='statsContainer'> 
						<br/>
						{
						<ul className='statsList'>
							<li>Date: {item.date.slice(0,10)}</li>
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
	stats: state.reducers.stats.stats,
	user: state.auth.currentUser || ''
})

export default connect(mapStateToProps)(StatsList)



