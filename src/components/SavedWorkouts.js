import React from 'react';
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import { fetchWorkouts } from '../actions/savedWorkouts'
import './SavedWorkouts.css'

class SavedWorkouts extends React.Component {
	componentDidMount(){
		this.props.dispatch(fetchWorkouts())
		
	}

	render() {
		return (
			<List className='workoutList'>
				<Subheader className='workoutTitle'>
					List of saved workouts
				</Subheader>
				{this.props.workoutList.map((savedWorkout, index) => (
					
						<ListItem  
							className='individualWorkout' 
							key={index} 
							primaryText={savedWorkout.workoutTitle}
							nestedItems={savedWorkout.exerciseList.map((item, index) => (
								<ListItem 
									key={index} 
									primaryText={item.equipment}
									open={true}
									nestedItems={[
										<ListItem key={index} primaryText={item.sets} />,
										<ListItem key={index} primaryText={item.repetitions} />,
										<ListItem key={index} primaryText={item.weight} />,
										<ListItem key={index} primaryText={item.notes} />
									]}
								/>
							))}
						/>
				))}
			</List>

		)
	}
}

const mapStateToProps = state => ({
	workoutList: state.reducers.savedWorkouts.workouts
})

export default connect(mapStateToProps)(SavedWorkouts)