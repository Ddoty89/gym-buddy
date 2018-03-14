const {API_BASE_URL} = require('../config');

export const login = (user) => {
	type: 'LOGIN',
	user
}

const requestData = () => ({
	type: 'REQUEST_DATA'
})

const recieveData = (data) => ({
	type: 'RECIEVE_DATA',
	data
})

export const fetchUserProfile = () => dispatch => {
    fetch(`${API_BASE_URL}/users/`)
    .then(userProfile => userProfile.json())
    .then(json => console.log(json))
    //     dispatch(fetchUserProfileSuccess(userProfile));
    // }).catch(err => dispatch(fetchUserProfileError(err)));
    .catch(err => console.log(err))
};