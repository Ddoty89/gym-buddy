import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RegistrationForm from './RegistrationForm'

export function Register(props) {

	if(props.loggedIn) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<div>
			<h2>Register for an account with Gym Buddy</h2>
			<RegistrationForm />
			<Link to='/'>Login</Link>
		</div>
	);
};

const mapStatetoProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStatetoProps)(Register);