import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';
import { required, nonEmpty, dateLength, correctCharaters } from '../validators'

import StatsList from './StatsList'
import { statsList } from '../actions/stats'
import './PersonalStatsForm.css'

const date = dateLength({min: 6, max: 8});

export class PersonalStatsForm extends React.Component {
    onSubmit(values) {
        const {weight, mileTime, goals, date, notes} = values;
        const user = {weight, mileTime, goals, date, notes};
        return this.props
            .dispatch(statsList(user))
    }

    render() { 
        return (
            <div>
                <form
                    className="personal-stats"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    
                    <Field  
                        component={TextField} 
                        name="weight" 
                        hintText='Weight (lbs)'
                    />

                    <Field  
                        component={TextField} 
                        name="mileTime" 
                        hintText='Mile time (minutes)'
                    />

                    <Field  
                        component={TextField} 
                        name="goals" 
                        hintText='Goals'
                    />

                    <Field  
                        component={TextField} 
                        name="notes" 
                        hintText='Notes'
                    />

                    <Field  
                        component={TextField}
                        name='dateLength' 
                        floatingLabelText="DD/MM/YY"
                        validate={[required, nonEmpty, date, correctCharaters]}
                    />

                    <RaisedButton                        
                        label='Update Stats'
                        className='statsSub'
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}
                        primary={true}
                        onClick={() => {
                            window.location='/main/stats'
                        }}
                    />
                </form>
                <StatsList />
            </div>
        );
    }
}

export default reduxForm({
    form: 'personalStats',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('personalStats', Object.keys(errors)[0]))
})(PersonalStatsForm);