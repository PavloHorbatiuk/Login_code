import React from 'react';
import {Link} from "react-router-dom";
import {PATH} from "../enums/enem";
import Login from "../components/Login";

LoginPage.propTypes = {};

function LoginPage() {
    return (
        <div>
            <h1>Login</h1>
            <Login/>
            <p>Or <Link to={PATH.REGISTER}> register</Link>
            </p>
        </div>
    );
}

export default LoginPage;