import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';

import { normalizeResponseErrors } from './utilities';

export const equipmentUsed = workedMuscles => ({
    type: 'EQUIPMENT_USED',
    workedMuscles
})

export const storeExercise = ({equipment, sets, repetitions, weight, notes}) => ({
    type: 'STORE_EXERCISE',
    equipment, 
    sets, 
    repetitions, 
    weight, 
    notes
})

export const equipment = () => {
    return dispatch => {
        return fetch(`${API_BASE_URL}/workouts/muscles`)
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(json => dispatch(equipmentUsed(json.muscles[0])))
            .catch(err => { 
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });   
    }
}


export const addWorkout = (workoutTitle, exerciseList) => {
    return dispatch => {
        let username = localStorage.getItem('username')
        fetch(`${API_BASE_URL}/workouts/saved`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                workoutTitle, 
                exerciseList
            })
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => { 
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
    }
}

