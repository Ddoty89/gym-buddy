import React from 'react';
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import LogoutButton from './LogoutButton'
import './NavBar.css'

class NavBar extends React.Component {
	state = {
    	open: false,
  	};

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	render() {
		const isLoggedIn = this.props.loggedIn
		const actions = [
	      	<FlatButton
	      		className='menuLink'
	        	label="Muscle Groups"
	        	primary={true}
	        	onClick={() => {
	        		window.location = '/main/muscle'
	        	}}
	      	/>,
	      	<FlatButton
	      		className='menuLink'
	        	label="Create Workout"
	        	primary={true}
	        	onClick={() => {
	        		window.location = '/main/equipment'
	        	}}
	      	/>,
	      	<FlatButton
	      		className='menuLink'
	        	label="Personal Stats"
	        	primary={true}
	        	onClick={() => {
	        		window.location = '/main/stats'
	        	}}
	      	/>
	    ];
		return (
			<div className='nav'>
				{isLoggedIn ? (
					<RaisedButton icon={<i className='material-icons'>menu </i>} onClick={this.handleOpen} />
				) : (
					''
				)}
		    	<Dialog
		    		className='menu'
		        	title="Gym Buddy menu"
		        	actions={actions}
		            modal={false}
		            open={this.state.open}
		            onRequestClose={this.handleClose}
		        >
		         Navigate anywhere in Gym Buddy
    			</Dialog>
				<div className='logoutButton'> 
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