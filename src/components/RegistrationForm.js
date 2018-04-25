import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';
import './RegistrationForm.css'
const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName, email, height, gender} = values;
        const user = {username, password, firstName, lastName, email, height, gender};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <div className='reg-div'>
                <form
                    className="reg-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <Field component={TextField} name="firstName" className='firstName' hintText="First Name" /><br/>

                    <Field component={TextField} name="lastName" hintText="Last Name" /><br/>

                    <Field component={TextField} name="email" hintText="Email" /><br/>

                    <Field 
                        component={TextField} 
                        name="height" 
                        hintText="Height"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field 
                        component={TextField} 
                        name="gender" 
                        hintText="Gender"
                        validate={[required, nonEmpty, isTrimmed]} 
                    />
                    <Field
                        component={TextField}
                        name="username"
                        hintText='Username'
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field
                        component={TextField}
                        hintText="Password"
                        name="password"
                        type='password'
                        validate={[required, passwordLength, isTrimmed]}
                    />
                    <Field
                        component={TextField}
                        hintText="Password Confirm"
                        name="passwordConfirm"
                        type='password'
                        validate={[required, nonEmpty, matchesPassword]}
                    />
                    <RaisedButton
                        className='regUser'
                        label='Register'
                        type="submit"
                        primary={true}
                        disabled={this.props.pristine || this.props.submitting}
                    />
                </form>
                <RaisedButton 
                    onClick={() => {
                        window.location = '/'
                    }}  
                    className='toLogin'
                    label="Login" 
                    type='submit'
                />
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);