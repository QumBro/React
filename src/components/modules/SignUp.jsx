import React, { useState } from 'react';
import { Link } from "react-router-dom";

import CustomInput from '../Input/CustomInput.jsx';
import CustomButton from '../Button/button.jsx';


export const SignUp = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [returnPassword, setReturnPassword] = useState("");

    const addUserToLocalStorage = () => {
        localStorage.setItem("user", JSON.stringify(obj));
    };

    const checkPassword = () => {
        if (password === returnPassword) {
            addUserToLocalStorage();
        }
        return false;
    };

    const obj = {
        userName: name,
        email: email,
        password: password,
        isAuthenticated: false
    };

    return (
        <>

            <h3>Sign up</h3>

            <CustomInput
                type="text"
                place="Login"
                value={name}
                setValue={(event) => setName(event.target.value)}
            />
            <CustomInput
                type="email"
                place="E-mail"
                value={email}
                setValue={(event) => setEmail(event.target.value)}
            />

            <CustomInput
                type="password"
                place="Password"
                value={password}
                setValue={(event) => setPassword(event.target.value)}
            />
            <CustomInput
                type="password"
                place="Return-Password"
                value={returnPassword}
                setValue={(event) => setReturnPassword(event.target.value)}
            />
            <CustomButton value="Create Account" localStorage={checkPassword} />

            <div className="link-create">
                <span>Have account? </span>
                <Link to="/" className="link-to">
                    Go to Sign In
                </Link>
            </div>

        </>
    )
}