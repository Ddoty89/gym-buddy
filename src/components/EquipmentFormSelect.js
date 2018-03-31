import React from 'react';
import {Field} from 'redux-form';
import { connect } from 'react-redux';

import {workoutStore} from '../actions/equipment'

const EquipmentFormSelect = ({equipment, workoutStore}) => (
	<div>
        <label htmlFor="equipment">Equipment</label>
        <div>
            <Field component='select' type="select" name="equipment" 
            onChange={(value) => {
				equipment(value.target.value)
			}}>

                <option></option>
                <option>Barbell</option>
                <option>Bench</option>
                <option>Dumbell</option>
                <option>Gym Mat</option>
                <option>Incline Bench</option>
                <option>Pull-up Bar</option>
            </Field>
        </div>
        <br/>

    <label htmlFor="muscles">Muscles: <span>muscles</span></label> <br/><br/>

    </div>
    
);


const mapDispatchToProps = dispatch => ({
	equipment: (equipment) => dispatch(workoutStore(equipment))
})

export default connect(null, mapDispatchToProps)(EquipmentFormSelect);

