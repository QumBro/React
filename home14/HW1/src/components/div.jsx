import React, { Component } from 'react';

class CustomDiv extends Component {
    render() {
        return (
            <div>
                <div className={this.props.nameclass}></div>
            </div>
        )
    }
}

export default CustomDiv;