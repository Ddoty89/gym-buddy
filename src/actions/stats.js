import {SubmissionError} from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utilities';

export const obtainedStats = stats => ({
    type: 'OBTAINED_STATS',
    stats 
})

export const personalStats = () => {
    return dispatch => {
    return  fetch(`${API_BASE_URL}/stats/personal-stats/`)
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({stats}) => dispatch(obtainedStats(stats)))
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
};