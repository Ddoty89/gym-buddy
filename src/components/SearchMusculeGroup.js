import React from 'react';
import { connect } from 'react-redux'

import MuscleGroupForm from './MuscleGroupForm'

function SearchMusculeGroup(props) {
	return (
		<div>
			<MuscleGroupForm />
		</div>
	)
}

export default connect()(SearchMusculeGroup)