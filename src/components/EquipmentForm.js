import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';

import { equipment } from '../actions/equipment'
import EquipmentFormSelect from './EquipmentFormSelect'

export class EquipmentForm extends React.Component {
    componentDidMount() {
        this.props.dispatch(equipment())
    }

    onSubmit(values) {
        // const {equipment, muscle, sets, repetitions, weight, notes} = values;
        // const user = {equipment, muscle, sets, repetitions, weight, notes};
        // return this.props
            // .dispatch(equipment())
    }

    render() {
        return (
            <form
                className="addEquipment"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>

                <EquipmentFormSelect />

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
                    Add Exercise
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