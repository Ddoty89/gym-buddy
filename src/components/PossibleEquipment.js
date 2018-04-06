import React from 'react'
import { connect } from 'react-redux'

function PossibleEquipment({possibleEquipment, selectedMuscleGroup}) {
	return (
		<div>
			<label>Suggested equipment: {possibleEquipment[selectedMuscleGroup.muscleGroups]}</label>
		</div>
	)
}

const mapStateToProps = state => ({
	possibleEquipment: state.reducers.muscleGroups.muscleGroups[0] || '',
	selectedMuscleGroup: state.form.muscleGroups.values || ''
})

export default connect(mapStateToProps)(PossibleEquipment)