import { combineReducers } from 'redux';

import auth from './auth'
import protectedReducer  from './protected'
import stats from './stats'
import equipmentOptions from './equipmentOptions'
import storeExercise from './storeExercise'
import muscleGroups from './muscleGroups'
import savedWorkouts from './savedWorkouts'

const reducers = combineReducers({
		auth,
		protectedReducer,
		stats,
		equipmentOptions,
		storeExercise,
		muscleGroups,
		savedWorkouts
	})

export default reducers