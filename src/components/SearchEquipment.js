import React from 'react';
import { connect } from 'react-redux';

import { equipment } from '../actions/equipment'

class SearchEquipment extends React.Component {
	componentDidMount() {
		this.props.dispatch(equipment())
	}

	render() {
		return (
			<div>
				<form >
					<input className='equipment' type='text' name='equipment' placeholder='Enter exercise equipment'/>
				</form>
			</div>
		)
	}
}

export default connect()(SearchEquipment)