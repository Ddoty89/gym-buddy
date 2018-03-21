import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'

import './LandingPage.css';
import LoginForm from './LoginForm'

function LandingPage(props)  {
	if(props.loggedIn) {
		return <Redirect to='/dashboard' />
	}

	return (
		<div className='landingPage'>
			<h1 className='header'>Welcome to Gym Buddy</h1>
			<LoginForm />
			<Link className='regButton' to='/register'>Register</Link>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);