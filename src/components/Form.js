import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Form = ({values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);
}

function LoginForm() {
    return (
    <div className='user-form'>
        <form>
            <input
                type="text"
                name="name"
                placeholderPlaceholders "Name"
            />
            <input
                type="text"
                name="email"
                placeholderPlaceholders "Email"
            />
             <input
                type="text"
                name="password"
                placeholderPlaceholders "Password"
            />
            <p>Terms of Service:</p>
            <button>Submit</button>
        </form>
    </div>
    );
};

export default FormikForm;