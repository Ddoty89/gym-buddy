import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';

import './LoginForm.css'

export class LoginForm extends React.Component {

    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login-form"
                onSubmit={
                    this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <Field 
                    component={TextField}
                    type="text"
                    name="username"
                    className="username"
                    hintText='username'
                    autoComplete='username'
                    validate={[required, nonEmpty]}
                />
                <Field
                    component={TextField}
                    type="password"
                    name="password"
                    className="password"
                    hintText='password'
                    autoComplete='current-password'
                    validate={[required, nonEmpty]}
                />
                <RaisedButton 
                    type='submit'
                    disabled={this.props.pristine || this.props.submitting}
                    className='loginButton'
                    label='Log in'
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);