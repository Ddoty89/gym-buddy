import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegistrationForm from './RegistrationForm'
import RegisterBackground from './RegisterBackground'
import './Register.css';

export function Register(props) {

	if(props.loggedIn) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<div className='regPage'>
			<h2 className='regHeader'>Register for an account with Gym Buddy</h2>
			<RegistrationForm />
			<RegisterBackground />
		</div>
	);
};

const mapStatetoProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStatetoProps)(Register);