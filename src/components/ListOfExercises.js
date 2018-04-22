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

            <div className='addWorkout'> 
            <form 
                className='addWorkoutForm'
                onSubmit={e => {
                    e.preventDefault();
                    let title = e.target.title.value
                    console.log(title, exercises)
                    addToWorkoutDB(title, exercises)
            }}>
                <TextField hintText='Name your workout' name='title' />
                <RaisedButton   
                    className='saveWorkout'
                    label="Save Workout" 
                    type='submit'
                    onClick={() => {
                        window.location.reload();
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
            <List className='exercisesToBeAdded'>
                {exercises.map((exercises, index) => (
                    <ListItem 
                        key={index}
                        primaryText={exercises.equipment} 
                        className='exercise'
                        nestedItems={[
                            <ListItem key={index} primaryText={exercises.sets} />,
                            <ListItem key={index} primaryText={exercises.repetitions} />,
                            <ListItem key={index} primaryText={exercises.weight} />,
                            <ListItem key={index} primaryText={exercises.notes} />
                        ]}
                    />
                ))}
            </List>
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

