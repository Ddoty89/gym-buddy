import React from 'react';
import { connect } from 'react-redux';
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

import { addWorkout } from '../actions/equipment'
import './ListOfExercises.css'

function ListOfExercises({exercises, addToWorkoutDB}) {
    return (
        <div>
            <List className='exercisesToBeAdded'>
                {exercises.map((exercises, index) => (
                    <ListItem 
                        key={index}
                        primaryText={exercises.equipment} 
                        className='exercise'
                        nestedItems={[
                            <ListItem key={index} primaryText='Sets:' secondaryText={exercises.sets} />,
                            <ListItem key={index} primaryText='Repetitions:' secondaryText={exercises.repetitions} />,
                            <ListItem key={index} primaryText='Weight:' secondaryText={exercises.weight} />,
                            <ListItem key={index} primaryText='Notes:' secondaryText={exercises.notes} />
                        ]}
                    />
                ))}
            </List>
            <div className='addWorkout'> 
                <form 
                    className='addWorkoutForm'
                    onSubmit={e => {
                        e.preventDefault();
                        let title = e.target.title.value
                        addToWorkoutDB(title, exercises)
                }}>
                    <TextField hintText='Name your workout' name='title' />
                    <RaisedButton   
                        className='saveWorkout'
                        label="Save Workout" 
                        type='submit'
                        onClick={() => {
                            window.location='/saved-workouts';
                        }}
                    />
                </form>
                <div className='linkContainer'>
                    <RaisedButton 
                        className='savedWorkoutLink' 
                        label="Your saved workouts" 
                        default={true}
                        onClick={() => {
                            window.location='/saved-workouts';
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    exercises: state.reducers.storeExercise.exercises || ''
})

const mapDispatchToProps = dispatch => ({
    addToWorkoutDB: (workoutTitle, exerciseList) => {dispatch(addWorkout(workoutTitle, exerciseList))}
})

export default connect(mapStateToProps, mapDispatchToProps)(ListOfExercises);

