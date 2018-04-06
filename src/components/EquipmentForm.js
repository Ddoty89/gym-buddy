import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';

import { storeExercise, equipment } from '../actions/equipment'
import ListOfExercises from './ListOfExercises'
import MuscleGroup from './MuscleGroup'

export class EquipmentForm extends React.Component {
    componentDidMount() {
        this.props.dispatch(equipment())
    }

    onSubmit(values) {
        const {equipment, sets, repetitions, weight, notes} = values;
        const user = {equipment, sets, repetitions, weight, notes};
        return this.props
            .dispatch(storeExercise(user))
    }

    render() {
        return (
            <div> 
                <form
                    className="addEquipment"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <label htmlFor="equipment">Equipment</label>
                        <div>
                            <Field component='select' type="select" name="equipment" >
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

                    <MuscleGroup />
                    <br/>

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

            <ListOfExercises />

            </div> 
        );
    }
}

export default reduxForm({
    form: 'equipment',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('equipment', Object.keys(errors)[0]))
})(EquipmentForm);