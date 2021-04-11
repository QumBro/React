import React from 'react';

import CustomthName from './thlastname.jsx'
import CustomthLastName from './thname.jsx'
import { dataTable } from './dataTable.js'

class HW2 extends React.Component {

    spawnTable = () => {
        return dataTable.map(item => {
            return (
                <tr key={item.id} >
                    <CustomthLastName
                        text={item.name}
                    />
                    <CustomthName
                        text1={item.lasName}
                    />
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="form">
                <table >
                    <tbody>
                        {this.spawnTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default HW2;