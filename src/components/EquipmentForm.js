import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';

import { addEquipment } from '../actions/equipment'

export class EquipmentForm extends React.Component {
    onSubmit(values) {
        const {equipment, muscle, sets, repetitions, weight, notes} = values;
        const user = {equipment, muscle, sets, repetitions, weight, notes};
        return this.props
            .dispatch(addEquipment(user))
    }

    render() {
        return (
            <form
                className="addEquipment"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="equipment">Equipment</label>
                <div>
                    <Field component='select' type="select" name="equipment">
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

                <label htmlFor="muscles">Muscles:<span> muscles</span></label> <br/><br/>

                <label htmlFor="sets">Sets</label>
                <Field component={Input} type="text" name="sets" />

                <label htmlFor="repetitions">Repetitions</label>
                <Field component={Input} type="text" name="repetitions" />

                <label htmlFor="weight">Weight</label>
                <Field component={Input} type="text" name="weight" />

                <label htmlFor="notes">Notes</label>
                <Field component={Input} type="text" name="notes" />

                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Add Workout
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'equipment',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('equipment', Object.keys(errors)[0]))
})(EquipmentForm);