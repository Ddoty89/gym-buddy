import { combineReducers } from 'redux';

import authReducer from './auth'
import protectedReducer  from './protected'
import userReducer from './userReducer'
import loginReducer from './loginReducer'

const reducers = combineReducers({
		authReducer,
		protectedReducer,
		userReducer,
		loginReducer
	})

export default reducers