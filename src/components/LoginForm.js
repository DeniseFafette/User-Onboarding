import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function LoginForm({values, errors, touched, status}) {
    const [users, setUsers] = useState([]);
    return (
    <div className='user-form'>
        <Form>
            <Field
                type="text"
                name="name"
                placeholder="Name"
            />
            {touched.name && errors.name && (
                <p className="errors">{errors.name}</p>
            )}
            <Field
                type="text"
                name="email"
                placeholder="Email"
            />
            {touched.email && errors.email && (
                <p className="errors">{errors.email}</p>
            )}
             <Field
                type="text"
                name="password"
                placeholder="Password"
            />
            {touched.password && errors.password && (
                <p className="errors">{errors.password}</p>
            )}
            <label> 
                Terms of Service
                <Field
                type="checkbox"
                name="terms"
                checked={values.terms} 
            />
            </label>
            <button>Submit</button>
        </Form>
    </div>
    );
};

const FormikLoginForm = withFormik({
    mapPropsToValues({name, email, password, terms}){
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false,
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required'),
    }),
    handleSubmit(values, { setStatus }) {
        axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
            setStatus(res.users);
            console.log(res);
        })
        .catch(err => console.group(err.response));
    }
})(LoginForm)

export default FormikLoginForm;
console.log("This is the Login Form HOC", FormikLoginForm);