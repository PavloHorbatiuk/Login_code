import React from 'react'
import Form from './Form'
import {useDispatch} from 'react-redux';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {setUserAC} from "../store/Auth-reducer";
import {useNavigate} from "react-router-dom";
import {PATH} from "../enums/enem";


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUserAC(user.email, user.uid, user.refreshToken))
                navigate(PATH.HOME_PAGE)
            })
            .catch((e)=>alert(e))
    }
    return (
        <Form
            title='Sign in'
            handleClick={handleLogin}
        />
    )
}

export default Login