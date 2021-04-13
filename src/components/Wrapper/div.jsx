import React, { Component } from 'react';

class CustomDiv extends Component {
    render() {
        return (
            <div className={this.props.nameclass}></div>
        )
    }
}

export default CustomDiv;