import React, { useState } from 'react';

import CustomInput from './Inputs/input.jsx';
import CustomRage from './Inputs/inputRage.jsx';

export const FormRage = () => {
    const [count, setCount] = useState(0);

    const addCount = (event) => {
        setCount(event.target.value)
    }

    return (
        <div className="form1">
            <CustomRage onChange={addCount} />
            <CustomInput value={count} />
        </div>
    )
}