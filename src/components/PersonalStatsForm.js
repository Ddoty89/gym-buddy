import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { TextField,  DatePicker } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';

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
                
                <Field  component={TextField} name="weight" hintText='Weight (lbs)'/><br/>

                <Field  component={TextField} name="mileTime" hintText='Mile time (minutes)'/><br/>

                <Field  component={TextField} name="goals" hintText='Goals'/><br/>

                <Field  component={TextField} name="notes" hintText='Notes'/><br/>

                <Field  
                    component={DatePicker} 
                    autoOk={true} 
                    name='date' 
                    mode="landscape" 
                    hintText='Date'
                />
                <br/>

                <RaisedButton
                    onClick={() => {
                        window.location = '/main/stats/'
                    }} 
                    label='Update Stats'
                    className='statsSub'
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}
                    primary={true}
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'personalStats',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('personalStats', Object.keys(errors)[0]))
})(PersonalStatsForm);