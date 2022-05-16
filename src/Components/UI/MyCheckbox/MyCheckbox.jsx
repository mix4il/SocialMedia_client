import React from 'react';
import './MyCheckbox.css'

const MyCheckbox = ({isChecked, value, setIsChecked, filterName}) => {
    return (
        <label className="checkbox-row">
            <input type="checkbox"
                   checked={isChecked}
                   value={value}
                   onChange={(e) => setIsChecked(e.target.value, filterName)}
            />
            <span>{value}</span>
        </label>
    );
};

export default MyCheckbox;