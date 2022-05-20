import React from 'react';
import './MyModal.css'

const MyModal = ({children, visible, setVisible}) => {
    let clazz = "myModal";

    if(visible){
        clazz += " myModal-active";
    }

    return (
        <div className={clazz} onClick={() => setVisible(false)}>
            <div className="myModalContent" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;

