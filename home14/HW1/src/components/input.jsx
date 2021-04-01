import React from 'react';


class CustomInput extends React.Component {
    render() {
        return (
            <div>
                <input type={this.props.type} name="" id="" placeholder={this.props.place} />
            </div>
        )
    }
}

export default CustomInput;