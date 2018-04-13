import React from 'react';
import { connect } from 'react-redux';
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';

import { addWorkout } from '../actions/equipment'
import './ListOfExercises.css'

function ListOfExercises({exercises, addToWorkoutDB}) {
    return (
        <div>

            <div className='addWorkout'> 
            <form 
                className='addWorkoutForm'
                onSubmit={e => {
                    e.preventDefault();
                    let title = e.target.title.value
                    addToWorkoutDB(title, exercises)
                    e.target.title.value = '';
            }}>
                <TextField hintText='Name your workout'/>
                <RaisedButton 
                    onClick={() => {
                        window.location = '/main/equipment'
                    }}  
                    className='saveWorkout' label="Save Workout" />
            </form>
        <div className='linkContainer'>
            <RaisedButton 
                className='savedWorkoutLink' 
                label="Your saved workouts"
                default={true}
                onClick={() => {
                    window.location = '/saved-workouts'
                }}
            />

        </div>

        </div>
            <div className='exercisesToBeAdded'>
                {exercises.map((exercises, index) => (
                    <ul key={index} className='exercise'>
                        <li>{exercises.equipment}</li>
                        <li>{exercises.sets}</li>
                        <li>{exercises.repetitions}</li>
                        <li>{exercises.weight}</li>
                        <li>{exercises.notes}</li>
                    </ul>
                ))}
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

