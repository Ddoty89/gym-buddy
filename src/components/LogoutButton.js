import React from 'react';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';

function LogoutButton(props) {

	return (
		<div>
			<RaisedButton 
					className='raisedButton'
					label={props.user.username}
					secondary={true} 
					onClick={() => {
						localStorage.clear();
						window.location = '/'
					}} 
				/>
		</div>
	)
}

const mapStateToProps = state => ({
	user: state.auth.currentUser || ''
})

export default connect(mapStateToProps)(LogoutButton)