import React from 'react';
import {Navigate} from "react-router-dom";
import {PATH} from "../enums/enem";
import {useAuth} from "../hooks/use-auth";
import {useDispatch} from "react-redux";
import {removeUserAC} from "../store/Auth-reducer";

HomePage.propTypes = {};

function HomePage() {
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth();
    return (isAuth ? (
                <div>
                    <h1>Welcome</h1>
                    <button onClick={() => dispatch(removeUserAC())}>Log out from {email}</button>
                </div>
            ) :
            <Navigate to={PATH.LOGIN}/>
    );
}

export default HomePage;