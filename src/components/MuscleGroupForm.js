import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import {muscleGroupList} from '../actions/muscleGroups'
import PossibleEquipment from './PossibleEquipment'

export class MuscleGroupForm extends React.Component {
    componentDidMount() {
		this.props.dispatch(muscleGroupList())
    }

    render() {
        return (
            <div> 
                <form
                    className="muscleGroups">
                    <label htmlFor="muscleGroups">Select muscle group</label>
                        <div>
                            <Field component='select' type="select" name="muscleGroups" >
                                <option></option>
                                <option>Arms</option>
                                <option>Back</option>
                                <option>Chest</option>
                                <option>Legs</option>
                                <option>Core</option>
                                <option>Cardio</option>
                            </Field>
                        </div>
                    <br/>

                    <PossibleEquipment />
                    <br/>

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