import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { SelectField } from 'redux-form-material-ui'
import MenuItem from 'material-ui/MenuItem'

import {muscleGroupList} from '../actions/muscleGroups'
import PossibleEquipment from './PossibleEquipment'
import PossibleEquipmentBackgroundImage from './PossibleEquipmentBackgroundImage'
import './MuscleGroupForm.css'

export class MuscleGroupForm extends React.Component {
    componentDidMount() {
		this.props.dispatch(muscleGroupList())
    }

    render() {
        return (
            <div className='muscleSearch'> 
                <h4 className='info'>If you're new to the gym and unsure what equipment to use, select a body part for a corresponding equiment</h4>
                <h4 className='info'>For more specific muscle groups, look for the corresponding equipment in the Create Workout page</h4>
                <form
                    className="muscleGroups">
                    <label htmlFor="muscleGroups">Select muscle group</label>
                        <div>
                            <Field component={SelectField} type="select" name="muscleGroups" >
                                <MenuItem value='Arms' primaryText='Arms' />
                                <MenuItem value='Back' primaryText='Back' />
                                <MenuItem value='Chest' primaryText='Chest' />
                                <MenuItem value='Legs' primaryText='Legs' />
                                <MenuItem value='Core' primaryText='Core' />
                                <MenuItem value='Cardio' primaryText='Cardio' />
                            </Field>
                        </div>

                    <PossibleEquipment />
                    <PossibleEquipmentBackgroundImage />
                </form>
            </div> 
        );
    }
}

export default reduxForm({
    form: 'muscleGroups',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('muscleGroups', Object.keys(errors)[0]))
})(MuscleGroupForm);