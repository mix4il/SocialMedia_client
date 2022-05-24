import React from 'react';

import './ProfileInfo.css'

const ProfileInfo = ({user}) => {
    return (
        <div className="profile-info">
            <div className="profile-name-wrapper">
                <span className="profile-info-name">{`${user.firstname} ${user.lastname}`}</span>
            </div>
            <hr/>
            <div className="info-text-wrapper">
                <span className="profile-info-text">Основной вид спорта: {user.sport}</span>
                <span className="profile-info-text">Возраст: {user.age}</span>
                <span className="profile-info-text">Рейтинг организатора: {user.rating}</span>
                {user.phone && <span className="profile-info-text">Номер телефона: {user.phone}</span>}
                {user.desc && <span className="profile-info-text">Информация о пользователе: {user.desc}</span>}
            </div>
        </div>
    );
};

export default ProfileInfo;