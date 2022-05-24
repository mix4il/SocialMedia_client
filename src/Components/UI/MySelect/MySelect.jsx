import React from 'react';
import './MySelect.css'

/*const MySelect = ({options, value, onChange,  defaultValue}) => {
    return (
        <select
                value={value}
                onChange={event => onChange(event.target.value)}
                className="select"
        >
            {
                options.map(option => {
                    return <option key={value} value={option.value}>{option.body}</option>
                })
            }
        </select>
    );
};*/

const MySelect = React.forwardRef(({options, name, onChange,  onBlur}, ref) => {
    return (
        <select
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            className="select"
            ref={ref}
        >
            {
                options.map(option => {
                    return <option key={option.value} value={option.value}>{option.body}</option>
                })
            }
        </select>
    );
})

export default MySelect;