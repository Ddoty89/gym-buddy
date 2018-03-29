const initialState = {
	user: {}
}

let username = localStorage.getItem('username');

export default function userReducer (state = initialState, action) {
	if(action.type === 'STORE_USER') {
		return { 
			user: action.user.filter(item => item.username === username)
		}
	} else {
		return state
	}
};
