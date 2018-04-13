import React from 'react';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';

function LogoutButton(props) {
	return (
		<div>
			<RaisedButton 
					className='raisedButtonLogout'
					label='Logout'
					default={true} 
					onClick={() => {
						localStorage.clear();
						window.location = '/'
					}} 
				/>
		</div>
	)
}

export default connect()(LogoutButton)

