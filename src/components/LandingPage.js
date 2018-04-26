import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import LandingPageBackground from './LandingPageBackground';

import './LandingPage.css';
import LoginForm from './LoginForm'

function LandingPage(props)  { 
	if(props.loggedIn) {
		return <Redirect to='/main/stats/' />
	}

	return ( 
		<div>
			<div className='landingPage'>
				<h1 className='header'>Welcome to Gym Buddy</h1>
				<p>Demo username: demo123456</p>
				<p>Demo password: demo123456</p>
				<LoginForm />
				<div className='reg'>
					<RaisedButton 
						className='regLink' 
						label="Register"
			        	default={true}
			        	onClick={() => {
			        		window.location = '/register'
			        	}}
		        	/>
				</div>
			</div>
			<LandingPageBackground />
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);