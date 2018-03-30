import React from 'react';
import { connect } from 'react-redux';

import EquipmentForm from './EquipmentForm'

class SearchEquipment extends React.Component {

	render() {
		return (
			<div>
				<EquipmentForm />

			</div>
		)
	}
}

export default connect()(SearchEquipment)