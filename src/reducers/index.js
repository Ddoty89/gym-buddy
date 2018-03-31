import { combineReducers } from 'redux';

import authReducer from './auth'
import protectedReducer  from './protected'
import userReducer from './userReducer'
import statsReducer from './statsReducer'
import equipmentReducer from './equipmentReducer'

const reducers = combineReducers({
		authReducer,
		protectedReducer,
		userReducer,
		statsReducer,
		equipmentReducer
	})

export default reducers