import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';

import { statsList } from '../actions/stats'
import './PersonalStatsForm.css'

export class PersonalStatsForm extends React.Component {
    onSubmit(values) {
        const {weight, mileTime, goals, date, notes} = values;
        const user = {weight, mileTime, goals, date, notes};
        return this.props
            .dispatch(statsList(user))
    }

    render() { 
        return (
            <form
                className="personal-stats"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label className='statsLabel' htmlFor="weight">Weight (lbs)</label>
                <Field className='statsField' component={Input} type="number" name="weight" />

                <label className='statsLabel' htmlFor="mileTime">Mile time (minutes)</label>
                <Field className='statsField' component={Input} type="text" name="mileTime" />

                <label className='statsLabel' htmlFor="goals">Goals</label>
                <Field className='statsField' component={Input} type="text" name="goals" />

                <label className='statsLabel'htmlFor="notes">Notes</label>
                <Field className='statsField' component={Input} type="text" name="notes" />

                <label className='statsLabel' htmlFor="date">Date</label>
                <Field className='statsField' component={Input} type="text" name="date" />

                <button
                    onClick={() => {
                        window.location = '/main/stats/'
                    }} 
                    className='statsSub'
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Update Stats
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'personalStats',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('personalStats', Object.keys(errors)[0]))
})(PersonalStatsForm);