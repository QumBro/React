import React, { Fragment } from 'react';

import CustomInput from './input.jsx';
import CustomButton from './button.jsx';
import CustomTitle from './title.jsx';
import CustomDiv from './div.jsx';
import './style.css';
import { dataWithName } from '../constants/dataWithName.js'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            check: true
        }
    }

    Singin = () => {
        this.setState({ check: true })
    }

    Singup = () => {
        this.setState({ check: false })
    }

    spawnDivs = () => {
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

    render() {
        const array = []
        if (this.state.check) {
            array.push(
                { key: 1, type: 'mail', place: 'Login' },
                { key: 2, type: 'password', place: 'Password' }
            )
        } else {
            array.push(
                { key: 3, type: 'text', place: 'Login' },
                { key: 4, type: 'mail', place: 'E-mail' },
                { key: 5, type: 'password', place: 'Password' },
                { key: 6, type: 'password', place: 'Return-Password' }
            )
        }
        return (
            <div className="form">
                {this.spawnDivs()}
                <div className="form-inner">
                    <CustomTitle />
                    {array.map(elem => {
                        return <CustomInput key={elem.key} type={elem.type} place={elem.place} />
                    })}
                    <CustomButton value='Login' func={this.Singin} />
                    <CustomButton value='Singup' func={this.Singup} />
                </div>
            </div>
        )
    }
}

export default Form;