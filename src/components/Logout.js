import React from 'react';

export default function Logout(props) {
	<div>
		<button onSubmit={e => {
			e.preventDefault()
			localStorage.removeItem('username')
		}}>Logout</button>
	</div>
}