const initialState = {
	loading: 'false',
	data: []
}

const userReducer = (state = initialState, action) => {
	if(action.type ===  'REQUEST_DATA') {
		return {
			loading: 'true'
		}
	} 
	else if(action.type === 'RECIEVE_DATA') {
		return {}
	}
	return state
}

export default userReducer