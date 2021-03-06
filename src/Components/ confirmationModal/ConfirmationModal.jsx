import React from 'react';
import './confirmationModal.css'
import MyButton from "../UI/MyButton/MyButton";

const ConfirmationModal = ({title, setVisible, userId, currentModalCancel, dispatch, confirmAction}) => {
    return (
        <div>
            <span className="confirm-title">{title}</span>
            <div className="buttons">
                <MyButton onClick={() => setVisible(false)}>Нет</MyButton>
                <MyButton red onClick={() => confirmAction(userId, currentModalCancel, dispatch)}>Да</MyButton>
            </div>
        </div>
    );
};

export default ConfirmationModal;