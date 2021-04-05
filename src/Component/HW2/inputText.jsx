import React from 'react';


class CustomInputTest extends React.Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.value2}
                    readOnly
                />
            </div>
        )
    }
}

export default CustomInputTest;