import React, { Fragment, useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { SignUp } from "../modules/SignUp.jsx";
import { SignIn } from "../modules/SignIn.jsx";
import '../Form/style.css';
import { dataWithName } from '../constants/dataWithName.js';
import CustomDiv from '../Wrapper/div.jsx';

export const Form = () => {
    const [isAuthenticated, setisAuthenticated] = useState(false)

    const spawnDivs = () => {
        return dataWithName.map(item => {
            return (
                <React.Fragment key={item.key}>
                    <CustomDiv
                        nameclass={item.nameclass}

                    />
                </React.Fragment>
            )
        })
    }

    return (
        <div className="form">
            {spawnDivs()}
            <div className="form-inner">
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => <SignIn {...props} setisAuthenticated={setisAuthenticated} />}
                        />
                        <Route exact path="/signup" component={SignUp} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}
