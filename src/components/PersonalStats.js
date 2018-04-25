import React from 'react';
import { connect } from 'react-redux';

import PersonalStatsForm from './PersonalStatsForm';

import PersonalStatsBackgroundImage from './PersonalStatsBackgroundImage'
import './PersonalStats.css';

class PersonalStats extends React.Component {
	render() {
		return (
			<div>
				<h3 className='statsHeader'>Studies show tracking your stats helps ensure your efforts are not wasted!</h3>
				<PersonalStatsForm />
				<PersonalStatsBackgroundImage />
			</div>
		)
	}
}

export default connect()(PersonalStats);