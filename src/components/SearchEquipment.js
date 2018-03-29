import React from 'react';
import { connect } from 'react-redux';

import { equipment } from '../actions/equipment'
import EquipmentForm from './EquipmentForm'

class SearchEquipment extends React.Component {
	componentDidMount() {
		this.props.dispatch(equipment())
	}

	render() {
		return (
			<div>
				<EquipmentForm />
			</div>
		)
	}
}

export default connect()(SearchEquipment)