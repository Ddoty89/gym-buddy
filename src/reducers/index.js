import { combineReducers } from 'redux';

import authReducer from './auth'
import protectedReducer  from './protected'
import userReducer from './userReducer'
import loginReducer from './loginReducer'
import statsReducer from './statsReducer'

const reducers = combineReducers({
		authReducer,
		protectedReducer,
		userReducer,
		loginReducer,
		statsReducer
	})

export default reducers