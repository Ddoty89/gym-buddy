import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
                <label htmlFor='title'>Name your workout:</label>
                <input type='text' name='title'/>
                <button
                    onClick={() => {
                        window.location = '/main/equipment'
                    }}  
                    className='saveWorkout'>Save Workout</button>
            </form>
        <div className='linkContainer'>
            <Link to='/saved-workouts'>
                <h5 className='savedWorkoutLink'>Your saved workouts</h5>
            </Link>

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

