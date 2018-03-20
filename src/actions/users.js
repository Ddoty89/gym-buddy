import {SubmissionError} from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utilities';
import { saveUsername } from '../local-storage';

const storeUsername = username => {
    saveUsername(username);
};

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({username}) => storeUsername(username))
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