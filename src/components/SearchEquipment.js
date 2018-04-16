import React from 'react';
import { connect } from 'react-redux';

import EquipmentForm from './EquipmentForm'
import EquipmentBackgroundImage from './EquipmentBackgroundImage'

class SearchEquipment extends React.Component {

	render() {
		return (
			<div>
				<EquipmentForm />
				<EquipmentBackgroundImage />
			</div>
		)
	}
}

export default connect()(SearchEquipment)