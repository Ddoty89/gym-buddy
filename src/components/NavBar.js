import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css'

export default function NavBar(props) {
	return (
		<div className='nav'>
			<Link to='/'> 
				<h3 className='link'>Home</h3>
			</Link>

			<Link to='/main/muscle'>
				<h3 className='link'>Search Muscle Groups</h3>
			</Link>

			<Link to='/main/equipment'>
				<h3 className='link'>Search Equipment</h3>
			</Link>

			<Link to='/main/stats/:username'>
				<h3 className='link'>Personal Stats</h3>
			</Link>			

		</div>
	)
}