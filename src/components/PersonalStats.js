import React from 'react';
import { connect } from 'react-redux';

import PersonalStatsForm from './PersonalStatsForm';
import User from './User';
import StatsList from './StatsList'

class PersonalStats extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div>
				<PersonalStatsForm />
				<User />
				<StatsList />				
			</div>
		)
	}
}


const mapStateToProps = state => ({
	stats: state.reducers.statsReducer.stats
})

export default connect(mapStateToProps)(PersonalStats);