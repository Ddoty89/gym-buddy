const initialState = {
	user: {}
}

const loginReducer = (state = initialState, action) => {
	if(action.type === 'LOGIN') {
		return { 
			user: action.user 
		}
	} else {
		return state
	}
};

export default loginReducer;
