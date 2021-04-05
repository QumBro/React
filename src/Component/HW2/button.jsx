import React from 'react';


class CustomButton extends React.Component {
    render() {
        return (
            <div>
                <button
                    type="submit"
                    onClick={this.props.handleClick}>
                    Click my
                    </button>
            </div>
        )
    }
}

export default CustomButton;