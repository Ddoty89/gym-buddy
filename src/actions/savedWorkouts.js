import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';

import { normalizeResponseErrors } from './utilities';

export const savedWorkouts = (workouts) => ({
	type: 'SAVED_WORKOUTS',
	workouts
})


export const fetchWorkouts = () => {
    return dispatch => {
        const username = localStorage.getItem('username')
        return fetch(`${API_BASE_URL}/workouts/saved/${username}`)
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({workouts}) => dispatch(savedWorkouts(workouts)))
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
