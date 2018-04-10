import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'

import './LandingPage.css';
import LoginForm from './LoginForm'

function LandingPage(props)  { 
	if(props.loggedIn) {
		return <Redirect to='/main/stats/' />
	}

	return ( 
		<div className='landingPage'>
			<h1 className='header'>Welcome to Gym Buddy</h1>
			<LoginForm />
			<div className='reg'>
				<Link className='regLink' to='/register'>Register</Link>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);