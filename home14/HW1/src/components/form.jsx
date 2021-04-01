import React from 'react';

import CustomInput from './input.jsx';
import CustomButton from './button.jsx';
import CustomTitle from './title.jsx';
import CustomDiv from './div.jsx';
import './style.css';
import { data } from '../constants/main.js'
import { dataWithName } from '../constants/dataWithName.js'

class Form extends React.Component {
    spawnInputs = () => {
        return data.map(item => {
            return (
                <div>
                    <CustomInput
                        place={item.place}
                        type={item.type}
                    />
                </div>
            )
        })
    }

    spawnDivs = () => {
        return dataWithName.map(item => {
            return (
                <div>
                    <CustomDiv
                        nameclass={item.nameclass}
                    />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="form">
                {this.spawnDivs()}
                <div className="form-inner">
                    <CustomTitle />
                    {this.spawnInputs()}
                    <CustomButton />
                </div>
            </div>
        )
    }
}

export default Form;