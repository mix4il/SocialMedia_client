import React from 'react';
import './MyButton.css'

const MyButton = ({children, red,  ...props}) => {
    let clazz = 'btn ';
    if(red){
        clazz+= 'btn-red '
    }
    return (
        <div>
            <button className={clazz} {...props}>{children}</button>
        </div>
    );
};

export default MyButton;