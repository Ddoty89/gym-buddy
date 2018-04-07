import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import LogoutButton from './LogoutButton'
import './NavBar.css'

class NavBar extends React.Component {

	render() {
		console.log(this.props.loggedIn)
		const isLoggedIn = this.props.loggedIn
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
				
				<div>
					{isLoggedIn ? (
						<LogoutButton />
					) : (
						''
					)}
				</div>

			</div>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar)