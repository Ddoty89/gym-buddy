import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty, isTrimmed} from '../validators';
import MenuItem from 'material-ui/MenuItem'
import { SelectField, TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';

import { storeExercise, equipment } from '../actions/equipment'
import ListOfExercises from './ListOfExercises'
import MuscleGroup from './MuscleGroup'
import './EquipmentForm.css'

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
                        <Field 
                            component={SelectField} 
                            name="equipment" 
                            hintText='Select equipment'
                            validate={[required, nonEmpty, isTrimmed]}
                        >
                            <MenuItem value='Barbell Squats' primaryText='Barbell Squats' />
                            <MenuItem value='Bench Press' primaryText='Bench Press' />
                            <MenuItem value='Dumbell Curl' primaryText='Dumbell Curl'/>
                            <MenuItem value='Gym Mat - Crunch' primaryText='Gym Mat - Crunch' />
                            <MenuItem value='Incline Bench Press' primaryText='Incline Bench Press' />
                            <MenuItem value='Pull-up Bar' primaryText='Pull-up Bar' />
                        </Field>
                    </div>

                    <MuscleGroup />

                    <Field 
                        component={TextField} 
                        name="sets" 
                        hintText='Sets'
                        validate={[required, nonEmpty, isTrimmed]}
                    />

                    <Field 
                        component={TextField} 
                        name="repetitions" 
                        hintText='Repetitions'
                        validate={[required, nonEmpty, isTrimmed]}
                    />

                    <Field 
                        component={TextField} 
                        name="weight" 
                        hintText='Weight'
                        validate={[required, nonEmpty, isTrimmed]}
                    />

                    <Field 
                        component={TextField} 
                        name="notes" 
                        hintText='Notes'
                        validate={[required, nonEmpty, isTrimmed]}
                    />

                    <RaisedButton
                        className='equipmentAddButton'
                        type='submit'
                        label='Add Exercise'
                        disabled={this.props.pristine || this.props.submitting}
                        primary={true}
                    />
                </form>

            <ListOfExercises listOfTitles={() => this.listOfTitles([])} listOfExercises={() => this.listOfExercises([])} />

            </div> 
        );
    }
}

export default reduxForm({
    form: 'equipment',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('equipment', Object.keys(errors)[0]))
})(EquipmentForm);