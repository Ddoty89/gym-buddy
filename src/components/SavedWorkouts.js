import React from 'react';
import { connect } from 'react-redux'

import { fetchWorkouts } from '../actions/savedWorkouts'
import './SavedWorkouts.css'

class SavedWorkouts extends React.Component {
	componentDidMount(){
		this.props.dispatch(fetchWorkouts())
		
	}

	render() {
		return (
			<div>
				<div className='savedWorkoutList'>
					{this.props.workoutList.map((item, index) => (
						<div  className='individualWorkout' key={index}><span className='workoutTitle'>{item.workoutTitle}</span>{item.exerciseList.map((item, index) => (
							<div key={index}>
							<br/>
								<ul className='workoutContainer'>
									<li>Equipment: {item.equipment}</li>
									<li>Sets: {item.sets}</li>
									<li>Reps: {item.repetitions}</li>
									<li>Weight: {item.weight}</li>
									<li>Notes: {item.notes}</li>
								</ul>
							</div>
						))}
						</div>
					))}
				</div>
			</div>	
		)
	}
}

const mapStateToProps = state => ({
	workoutList: state.reducers.savedWorkouts.workouts
})

export default connect(mapStateToProps)(SavedWorkouts)