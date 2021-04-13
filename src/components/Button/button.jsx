import React, { Component } from 'react';

class CustomButton extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.localStorage}>
                    {this.props.value}
                </button>
            </div>
        )
    }
}

export default CustomButton;