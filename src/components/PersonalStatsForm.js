import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';

import { statsList } from '../actions/stats'

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
                <label htmlFor="weight">Weight (lbs)</label>
                <Field component={Input} type="number" name="weight" />

                <label htmlFor="mileTime">Mile Time (minutes)</label>
                <Field component={Input} type="text" name="mileTime" />

                <label htmlFor="goals">Goals</label>
                <Field component={Input} type="text" name="goals" />

                <label htmlFor="notes">Notes</label>
                <Field component={Input} type="text" name="notes" />

                <label htmlFor="date">Date</label>
                <Field component={Input} type="text" name="date" />

                <button
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