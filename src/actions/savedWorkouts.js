import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';

import { normalizeResponseErrors } from './utilities';

export const savedWorkouts = (data) => ({
	type: 'SAVED_WORKOUTS',
	data
})


export const fetchWorkouts = () => {
    return dispatch => {
        return fetch(`${API_BASE_URL}/workouts/saved`)
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(json => dispatch(savedWorkouts(json)))
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
