import React from 'react';
import {
	BrowserRouter as Router,
	Route
	} from 'react-router-dom';

import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import RoutineDeveloper from './components/RoutineDeveloper'

export default function App(props) {
	return (
		<Router>
			<div>
				<NavBar />
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/main' component={RoutineDeveloper} />	
			</div>
		</Router>
	)
}