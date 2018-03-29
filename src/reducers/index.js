import { combineReducers } from 'redux';

import authReducer from './auth'
import protectedReducer  from './protected'
import userReducer from './userReducer'
import statsReducer from './statsReducer'

const reducers = combineReducers({
		authReducer,
		protectedReducer,
		userReducer,
		statsReducer
	})

export default reducers