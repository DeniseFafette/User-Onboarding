import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = ({values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);
}

function LoginForm() {
    return (
    <div className='user-form'>
        <form>
            <input
                type="text"
                name="name"
                placeholder="Name"
            />
            <input
                type="text"
                name="email"
                placeholder="Email"
            />
             <input
                type="text"
                name="password"
                placeholder="Password"
            />
            <p>Terms of Service:</p>
            <button>Submit</button>
        </form>
    </div>
    );
};

const FormikLoginForm = withFormik({
    mapPropsToValues({name, email, password}){
        return {
            name: name || "",
            email: email || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
    }),
    handleSubmit(values, { setStatus }) {
        axios
        .post(, values)
        .then(res => {
            setStatus(res.data);
            console.log(res);
        })
    }
})(LoginForm)

export default FormikLoginForm;
console.log("This is the Login Form HOC", FormikLoginForm);