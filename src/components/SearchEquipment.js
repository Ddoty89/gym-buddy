import React from 'react';
import { connect } from 'react-redux';

import EquipmentForm from './EquipmentForm'
import EquipmentBackgroundImage from './EquipmentBackgroundImage'

class SearchEquipment extends React.Component {

	render() {
		return (
			<div>
				<h3 className='equipmentHeader'>Add exercises to a list for a complete workout!</h3>
				<EquipmentForm />
				<EquipmentBackgroundImage />
			</div>
		)
	}
}

export default connect()(SearchEquipment)