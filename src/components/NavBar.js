import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css'

export default function NavBar(props) {
	return (
		<div className='nav'>
			<Link to='/'> 
				<p>Home</p>
			</Link>

		</div>
	)
}