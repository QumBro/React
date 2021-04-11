import React from 'react';


class CustomthName extends React.Component {
    render() {
        return (
            <th>{this.props.text}</th>
        )
    }
}

export default CustomthName;