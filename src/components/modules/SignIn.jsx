import React, { useState } from "react";
import { Link } from "react-router-dom";

import CustomInput from '../Input/CustomInput.jsx';
import CustomButton from '../Button/button.jsx';


export function SignIn(props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const redirect = () => {
        const { history } = props;
        history.push("/signup");
    };

    const getFromLocalStorage = () => {
        if (localStorage.getItem("user") !== null) {
            const user = JSON.parse(
                localStorage.getItem(localStorage.key("user"))
            );
            if (user.userName === name && user.password === password) {
                user.isAuthenticated = 'true';
                localStorage.setItem("user", JSON.stringify(user));
                props.setisAuthenticated(true)
                alert('Получилось!')
            } else {
                props.setisAuthenticated(false)
                redirect();
            }
        }
    };


    return (
        <>
            <h3>Sign in</h3>
            <div className="fields">
                <CustomInput
                    type="text"
                    value={name}
                    place="Login"
                    setValue={(event) => setName(event.target.value)}
                />

                <CustomInput
                    type="password"
                    place="Password"
                    value={password}
                    setValue={(event) => setPassword(event.target.value)}
                />

                <CustomButton value="Sign In" localStorage={getFromLocalStorage} />
            </div>
            <div className="link-create">
                <span>New with us? </span>
                <Link to="/signup" className="link-to">
                    Go to Sign Up
                </Link>
            </div>
        </>
    );
}