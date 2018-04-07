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
				{this.props.workoutList.map((item, index) => (
					<div key={index}>{item.workoutTitle}{item.exerciseList.map((item, index) => (
						<div key={index}>
							<ul>
								<li>{item.equipment}</li>
								<li>{item.sets}</li>
								<li>{item.repetitions}</li>
								<li>{item.weight}</li>
								<li>{item.notes}</li>
							</ul>
						</div>
					))}
					</div>
				))}
			</div>	
		)
	}
}

const mapStateToProps = state => ({
	workoutList: state.reducers.savedWorkouts.workouts
})

export default connect(mapStateToProps)(SavedWorkouts)