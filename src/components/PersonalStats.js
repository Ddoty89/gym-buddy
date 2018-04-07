import React from 'react';
import { connect } from 'react-redux';

import PersonalStatsForm from './PersonalStatsForm';
import User from './User';
import StatsList from './StatsList'

class PersonalStats extends React.Component {
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

export default connect()(PersonalStats);