import React from 'react';
import { connect } from 'react-redux'

import {findUser} from '../actions/users'

class User extends React.Component {
	componentDidMount() {
		this.props.dispatch(findUser())
	}

	render() {
		return (
			<div>
				{this.props.user.username}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	user: state.auth.currentUser || ''
})

export default connect(mapStateToProps)(User)