import React from 'react';

import './ActionsBarAdmin.css'
import MyButton from "../UI/MyButton/MyButton";

const ActionsBarAdmin = ({setIsShowCreateForm}) => {
    return (
        <div className="actionBarAdmin">
            <div className="actionBarAdmin-wrapper">
                <MyButton action >Изменить информацию о себе</MyButton>
                <MyButton action onClick={()=> setIsShowCreateForm(true)}>Организовать тренировку</MyButton>
                <MyButton action>Искать партнеров по команде</MyButton>
            </div>
        </div>
    );
};

export default ActionsBarAdmin;