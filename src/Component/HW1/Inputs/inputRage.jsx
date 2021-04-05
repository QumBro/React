import React from 'react';


class CustomRage extends React.Component {
    render() {
        return (
            <div>
                <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}

export default CustomRage;