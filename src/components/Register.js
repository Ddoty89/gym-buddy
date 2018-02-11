import React from 'react';

export default function Register(props) {
	return (
		<div>
			<input className='firstName' type='text' name='firstName' placeholder='First Name' />
			<input className='lastName' type='text' name='lastName' placeholder='Last Name' />
			<input className='regUser' type='text' name='regUser' placeholder='Username' />
			<input className='regPass' type='password' name='regpass' placeholder='Password' />
			<input className='regEmail' type='email' name='regEmail' placeholder='Email' />
			<button>Register</button>
		</div>
	)
}