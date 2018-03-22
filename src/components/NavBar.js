import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import './NavBar.css'

function NavBar(props) {
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

			<Link to='/main/stats'>
				<h3 className='link'>Personal Stats</h3>
			</Link>	
			
			<button onClick={() => {
				localStorage.clear();
			}}>{localStorage.getItem('username')}</button>

		</div>
	)
}

export default connect()(NavBar)