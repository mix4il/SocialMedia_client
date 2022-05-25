import React from 'react';

import './Message.css'

const Message = ({own, message}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className={own ? "message message-own" : "message"}>
            <div className="message-info">
                <img className="message-user-img" src={PF + 'free-icon-user-219983.png'} alt="Ава" />
            </div>
            <div className="text-box">
                <div className={own ? "message-text message-text-own" : "message-text"}>
                    {
                        message.text
                    }
                </div>
                <p className="message-time">10 минут назад</p>
            </div>
        </div>
    );
};

export default Message;