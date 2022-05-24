import React from 'react';
import './MyButton.css'

const MyButton = ({children, red, action, small,  ...props}) => {
    let clazz = 'btn ';
    if(red){
        clazz+= ' btn-red '
    }

    if(action){
        clazz+=' btn-action '
    }

    if(small){
        clazz+=' btn-small'
    }

    return (
        <div>
            <button className={clazz} {...props}>{children}</button>
        </div>
    );
};

export default MyButton;