import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

const LoginInput = ({user}) => (
	<form onSubmit = {e => {
		e.preventDefault();
		let loginInput = e.target.logUser.value;
		user()
		localStorage.setItem('username',loginInput);
		e.target.logUser.value = '';
	}}>
		<input className='logUser' type='text' name='logUser' placeholder='Username' required />
		<input className='logPass' type='password' name='logPass' placeholder='Password' required />
		<button>Login</button>
		<p>OR</p>
	</form>
);

const mapDispatchToProps = (dispatch) => ({
	user: () => dispatch(fetchUser())
})


export default connect(null, mapDispatchToProps)(LoginInput);