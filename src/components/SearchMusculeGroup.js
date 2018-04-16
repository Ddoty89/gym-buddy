import React from 'react';
import { connect } from 'react-redux'

import MuscleGroupForm from './MuscleGroupForm'
import PossibleEquipmentBackgroundImage from './PossibleEquipmentBackgroundImage'

function SearchMusculeGroup(props) {
	return (
		<div>
			<MuscleGroupForm />
			<PossibleEquipmentBackgroundImage />
		</div>
	)
}

export default connect()(SearchMusculeGroup)