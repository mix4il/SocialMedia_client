import React from 'react';
import './MyInput.css'

const MyInput = React.forwardRef(({kind, error,  ...props}, ref) => {
    let clazz = 'input ';

    if(kind === 'small'){
        clazz+= 'input_small ';
    }

    if(kind === 'green'){
        clazz+= 'input_green ';
    }

    if(error){
        clazz+= 'input_err ';
    }

    return (
        <input ref={ref} className={clazz} {...props}/>
    );
});

export default MyInput;