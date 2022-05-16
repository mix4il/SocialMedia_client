import React from 'react';
import './MyInputDate.css'

const MyInputDate = (props) => {
    return (
        <input className="input-date" type="datetime-local" {...props}/>
    );
};

export default MyInputDate;