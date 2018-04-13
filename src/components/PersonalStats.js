import React from 'react';
import { connect } from 'react-redux';

import PersonalStatsForm from './PersonalStatsForm';
import StatsList from './StatsList'
import './PersonalStats.css';

class PersonalStats extends React.Component {
	render() {
		return (
			<div>
				<PersonalStatsForm />
				<StatsList />				
			</div>
		)
	}
}

export default connect()(PersonalStats);