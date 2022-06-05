import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import {PATH} from "./enums/enem";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
    return (
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path={PATH.HOME_PAGE} element={<HomePage/>}/>
            <Route path={PATH.LOGIN} element={<LoginPage/>}/>
            <Route path={PATH.REGISTER} element={<RegisterPage/>}/>
        </Routes>
    );
}

export default App;
