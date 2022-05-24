import React from 'react';

import './ActionsBarUser.css'
import MyButton from "../UI/MyButton/MyButton";

const ActionsBarUser = ({userId}) => {

    return (
        <div className="actionBarUser">
            <div className="actionBarUser-wrapper">
                <MyButton action>Добавить в друзья</MyButton>
                <MyButton action>Написать сообщение</MyButton>
                <MyButton action>Пригласить в команду</MyButton>
            </div>
        </div>
    );
};

export default ActionsBarUser;