import { combineReducers } from 'redux';

import auth from './auth'
import protectedReducer  from './protected'
import user from './user'
import stats from './stats'
import equipmentSelector from './equipmentSelector'
import equipmentOptions from './equipmentOptions'

const reducers = combineReducers({
		auth,
		protectedReducer,
		user,
		stats,
		equipmentSelector,
		equipmentOptions
	})

export default reducers