import React from 'react';
import './MyInput.css'

const MyInput = ({kind, ...props}) => {
    let clazz = 'input ';

    if(kind === 'small'){
        clazz+= 'input_small ';
    }

    if(kind === 'green'){
        clazz+= 'input_green ';
    }

    return (
            <input className={clazz} {...props}/>
    );
};

export default MyInput;