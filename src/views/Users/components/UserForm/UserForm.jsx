import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';

import validate from './validate';

const renderField = ({
    input,
    label,
    type,
    meta: { error }
}) => (
    <>
        <label>{label}</label>
        <div>
            <input {...input} type={type} className='form-control' />
        </div>
        <span className="reservations__error">{error}</span>
    </>
)

const UserFrom = ({
    handleSubmit,
    submitting
}) => (
    <div>
        <Form onSubmit={handleSubmit}>
            <div className='form-group'>
                <Field name='firstName' component={renderField} type='text' label='First name' />
            </div>
            <div className='form-group'>
                <Field name='lastName' component={renderField} type='text' label='Last name' />
            </div>
            <div className='form-group'>
                <Field name='roomNumber' component={renderField} type='number' label='Room name' />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary' disabled={submitting}>
                    Add user
                </button>
            </div>
        </Form>
    </div>
);

export default reduxForm({
    form: 'user',
    validate
})(UserFrom);
