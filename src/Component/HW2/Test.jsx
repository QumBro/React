import React from 'react';

import CustomButton from './button.jsx';
import CustomInputTest from './inputText.jsx';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: "",
        };
    }

    static getDerivedStateFromProps(props) {
        if (props.value2 <= props.trigger) {
            return {
                currentValue: props.value2,
            };
        }
        return null;
    }


    render() {
        return (
            <div className="form2">
                <CustomInputTest value2={this.state.currentValue} />
                <CustomButton handleClick={this.props.handleClick} />
            </div>
        )
    }
}

export default Test;