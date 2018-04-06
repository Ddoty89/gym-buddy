import React from 'react';
import { connect } from 'react-redux'

function MuscleGroup({workedMuscles, equipmentSelected}) {
	return (
		<div>
			<label>Muscle Group: {workedMuscles[equipmentSelected.equipment]}</label>
		</div>
	)
}

const mapStateToProps = state => ({
	workedMuscles: state.reducers.equipmentOptions.workedMuscles || '',
	equipmentSelected: state.form.equipment.values || ''
})

export default connect(mapStateToProps)(MuscleGroup)