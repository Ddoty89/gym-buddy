import React from 'react';
import {
	BrowserRouter as Router,
	Route
	} from 'react-router-dom';

import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import SearchMusculeGroup from './components/SearchMusculeGroup'
import SearchEquipment from './components/SearchEquipment'
import PersonalStats from './components/PersonalStats'

export default function App(props) {
	return (
		<Router>
			<div>
				<NavBar />
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/main/muscle' component={SearchMusculeGroup} />
				<Route exact path='/main/equipment' component={SearchEquipment} />
				<Route exact path='/main/stats/:username' component={PersonalStats} />
			</div>
		</Router>
	)
}