import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css'

export default function NavBar(props) {
	return (
		<div className='nav'>
			<Link to='/'> 
				<h3>Home</h3>
			</Link>

			<Link to='/main'>
				<h3>Search Exercises</h3>
			</Link>

		</div>
	)
}