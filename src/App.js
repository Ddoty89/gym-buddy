import React from 'react';
import {
	BrowserRouter as Router,
	Route
	} from 'react-router-dom';

import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'

export default function App(props) {
	return (
		<Router>
			<div>
				<NavBar />
				<Route exact to='/' component={LandingPage} />
			
			</div>
		</Router>
	)
}