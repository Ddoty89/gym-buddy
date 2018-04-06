import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';

import { normalizeResponseErrors } from './utilities';

export const muscleGroups = data => ({
    type: 'MUSCLE_GROUP_LIST',
    data
});

export const muscleGroupList = () => {
	return dispatch => {
		return fetch(`${API_BASE_URL}/muscles/possible-machines`)
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(json => dispatch(muscleGroups(json.muscles)))
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