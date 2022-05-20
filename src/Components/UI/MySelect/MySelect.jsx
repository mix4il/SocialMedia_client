import React from 'react';
import './MySelect.css'

const MySelect = ({options, value, onChange,  defaultValue}) => {
    return (
        <select
                value={value}
                onChange={event => onChange(event.target.value)}
                className="select"
        >
            {
                options.map(option => {
                    return <option value={option.value}>{option.body}</option>
                })
            }
        </select>
    );
};

export default MySelect;