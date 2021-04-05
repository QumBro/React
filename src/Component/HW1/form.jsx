import React from 'react';

import CustomInput from './Inputs/input.jsx';
import CustomRage from './Inputs/inputRage.jsx';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: "",
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({
            val: event.target.value,
        });
    }

    render() {
        return (
            <div className="form1">
                <CustomRage onChange={this.onChange} />
                <CustomInput value={this.state.val} />
            </div>
        )
    }
}

export default Form;