const {API_BASE_URL} = require('../config');

export const login = (user) => ({
	type: 'LOGIN',
	user
})

// const requestData = () => ({
// 	type: 'REQUEST_DATA'
// })

// const recieveData = (data) => ({
// 	type: 'RECIEVE_DATA',
// 	data
// })

export const fetchUser = () => {
	return dispatch => {
		// dispatch(recieveData())
    fetch(`${API_BASE_URL}/users/`)
    .then(users => users.json())
    .then(json => json.map(
    	user => {
    		console.log(user)
    		}
      )
    )

    //     dispatch(fetchUserProfileSuccess(userProfile));
    // }).catch(err => dispatch(fetchUserProfileError(err)));
    .catch(err => console.log(err))
  }
};