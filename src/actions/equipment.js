import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';

import { normalizeResponseErrors } from './utilities';

// export const equipment = () => {
//     return dispatch => {
//         return fetch('https://wger.de/api/v2/equipment/?format=json', {
//         	method: 'GET',
//         	headers: {
//         		'Accept': 'application/json',
//             	Authorization: {'Token': 'B30ce54f6dabe16439a47f535d10cbc2020136f2c'}
//        		}
//         })
//             .then(res => normalizeResponseErrors(res))
//             .then(res => res.json())
//             .catch(err => { 
//             const {reason, message, location} = err;
//             if (reason === 'ValidationError') {
//                 return Promise.reject(
//                     new SubmissionError({
//                         [location]: message
//                     })
//                 );
//             }
//         });   
//     }
// }

export const workoutStore = equipment => ({
    type: 'WORKOUT_STORE',
    equipment
})

export const addEquipment = ({equipment, muscle, sets, repetitions, weight, notes}) => dispatch => {
    let username = localStorage.getItem('username')
    fetch(`${API_BASE_URL}/workouts/saved`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            equipment, 
            muscle, 
            sets, 
            repetitions, 
            weight, 
            notes
        })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(json => console.log(json))
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

