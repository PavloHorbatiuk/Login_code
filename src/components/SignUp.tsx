import React from 'react'
import Form from './Form'
import {useDispatch} from 'react-redux';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import {setUserAC} from "../store/Auth-reducer";
import {PATH} from "../enums/enem";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUserAC(user.email, user.uid, user.refreshToken))
                navigate(PATH.HOME_PAGE)
            })
            .catch((e) => alert(e))

    }
    return (
        <Form
            title='register'
            handleClick={handleRegister}
        />
    )
}

export default SignUp