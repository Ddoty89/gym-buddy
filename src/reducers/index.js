import { combineReducers } from 'redux';

import userReducer from './userReducer'
import loginReducer from './loginReducer'

const reducers = combineReducers({
		userReducer,
		loginReducer
	})

export default reducers