// import React from 'react';

// export const CustomInput = ({ type, place, name, value, onChange }) => {
//     return (
//         <div>
//             <input type={type} placeholder={place} name={name} value={value} onChange={onChange} />
//         </div>
//     )
// }

import React, { Component } from 'react';

class CustomInput extends Component {
    render() {
        return (
            <div>
                <input
                    key={this.props.key}
                    type={this.props.type}
                    placeholder={this.props.place}
                    defaultValue={this.props.value}
                    onChange={this.props.setValue}
                />
            </div>
        )
    }
}

export default CustomInput;