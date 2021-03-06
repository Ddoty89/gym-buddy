import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import SearchMusculeGroup from './components/SearchMusculeGroup';
import SearchEquipment from './components/SearchEquipment';
import PersonalStats from './components/PersonalStats';
import Register from './components/Register';
import SavedWorkouts from './components/SavedWorkouts'
import { refreshAuthToken } from './actions/auth';
import './App.css';


export class App extends React.Component {
	componentDidUpdate(prevProps) {
		if(!prevProps.loggedIn && this.props.loggedIn) {
			this.startPeriodicRefresh();
		} else if (prevProps.loggedIn && !this.props.loggedIn) {
			this.startPeriodicRefresh();
		}
	}

	componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }


	render() {	
		return (
			<div>
				<NavBar />
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/main/muscle' component={SearchMusculeGroup} />
				<Route exact path='/main/equipment' component={SearchEquipment} />
				<Route exact path='/main/stats/' component={PersonalStats} />
				<Route exact path='/saved-workouts' component={SavedWorkouts} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));