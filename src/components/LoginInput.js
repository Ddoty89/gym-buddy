import React from 'react';

export default function LoginInput(props) {
	return (
		<form>
			<input className='logUser' type='text' name='logUser' placeholder='Username' required />
			<input className='logPass' type='password' name='logPass' placeholder='Password' required />
			<button>Login</button>
			<p>OR</p>
			<button>Register</button>
		</form>
	)
}