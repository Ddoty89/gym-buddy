import { combineReducers } from 'redux';

import auth from './auth'
import protectedReducer  from './protected'
import user from './user'
import stats from './stats'
import equipmentOptions from './equipmentOptions'
import storeExercise from './storeExercise'

const reducers = combineReducers({
		auth,
		protectedReducer,
		user,
		stats,
		equipmentOptions,
		storeExercise
	})

export default reducers