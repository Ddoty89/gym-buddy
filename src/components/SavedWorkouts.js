import React from 'react';
import { connect } from 'react-redux'

import { fetchWorkouts } from '../actions/savedWorkouts'

class SavedWorkouts extends React.Component {
	componentDidMount(){
		this.props.dispatch(fetchWorkouts())
	}

	render() {
		return (
			<div>
				{console.log(this.props.workoutList[0])}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	workoutList: state.reducers.savedWorkouts.savedWorkoutList || ''
})

export default connect(mapStateToProps)(SavedWorkouts)