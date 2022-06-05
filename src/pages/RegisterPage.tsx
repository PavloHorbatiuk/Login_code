import React from 'react';
import {Link} from "react-router-dom";
import {PATH} from "../enums/enem";
import SignUp from "../components/SignUp";

RegisterPage.propTypes = {};

function RegisterPage() {
    return (
        <div>
            <h1>Register</h1>
            <SignUp/>
            <p>
                Already have an account? <Link to={PATH.LOGIN}>Sign in</Link>
            </p>
        </div>
    );
}

export default RegisterPage;