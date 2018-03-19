import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'

import Login from './Login'

export function LandingPage(props) {
	if(props.loggedIn) {
		return <Redirect to='/dashboard' />
	}

	return (
		<div className='landingPage'>
			<h1>Welcome to gym buddy</h1>
			<Login />
			<Link to='/register'>Register</Link>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(landingPage);