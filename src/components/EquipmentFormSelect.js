import React from 'react';
import {Field} from 'redux-form';
import { connect } from 'react-redux';

import {equipmentSelection} from '../actions/equipment'

const EquipmentFormSelect = ({equipment, equipmentSelection, equipmentOptions, equipmentSelected}) => (
	<div>
        <label htmlFor="equipment">Equipment</label>
        <div>
            <Field component='select' type="select" name="equipment" 
            onChange={(value) => {
                let selection = value.target.value
				equipmentSelection(selection)
			}}>

                <option></option>
                <option>Barbell Squats</option>
                <option>Bench Press</option>
                <option>Dumbell Curl</option>
                <option>Gym Mat - Crunch</option>
                <option>Incline Bench Press</option>
                <option>Pull-up Bar</option>
            </Field>
        </div>
        <br/>

    <label htmlFor="muscles">Muscles: {equipmentOptions[equipmentSelected]}</label> <br/><br/>

    </div>
    
);

const mapStateToProps = state => ({
    equipmentOptions: state.reducers.equipmentOptions.workedMuscles || '',
    equipmentSelected: state.reducers.equipmentSelector.equipment || ''
})

const mapDispatchToProps = dispatch => ({
	equipmentSelection: (equipment) => dispatch(equipmentSelection(equipment))
})

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentFormSelect);

