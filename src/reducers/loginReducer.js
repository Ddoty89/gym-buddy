const initialState = {
	username: {}
}

export default function loginReducer (state = initialState, action) {
	if(action.type === 'STORE_USERNAME') {
		return { 
			username: action.username 
		}
	} else {
		return state
	}
};
