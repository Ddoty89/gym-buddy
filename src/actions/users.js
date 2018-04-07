import {SubmissionError} from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utilities';

export const storeUser = user => ({
    type: 'STORE_USER',
    user
});

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
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
};

export const findUser = () => {
    return dispatch => {
        return fetch(`${API_BASE_URL}/users/`)
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(json => dispatch(storeUser(json)))
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
