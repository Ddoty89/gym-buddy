import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addWorkout } from '../actions/equipment'

function ListOfExercises({exercises, addToWorkoutDB}) {
    return (
        <div>

            <div> 
            <form onSubmit={e => {
                e.preventDefault();
                let title = e.target.title.value
                addToWorkoutDB(title, exercises)
                e.target.title.value = '';
            }}>
                <label htmlFor='title'>Name your workout</label>
                <input type='text' name='title'/>
                <button>Save Workout</button>
            </form>
        </div>

            {exercises.map((exercises, index) => (
                <ul key={index}>
                    <li>{exercises.equipment}</li>
                    <li>{exercises.sets}</li>
                    <li>{exercises.repetitions}</li>
                    <li>{exercises.weight}</li>
                    <li>{exercises.notes}</li>
                </ul>
            ))}

            <div>
                <Link to='/saved-workouts'>
                    <h5 className='link'>Your saved workouts</h5>
                </Link>

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

