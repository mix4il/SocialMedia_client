import React from 'react';
import './Header.css'
import MyButton from "../UI/MyButton/MyButton";

const Header = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <div className="header-container">
                <div className="header-content">
                    <div className="header-logo">
                        <span>VSporte</span>
                    </div>
                    <div className="header-toolbar">
                        <div className="header-profile">
                            <span className="profile-name">MB</span>
                            <img className="profile-img" src={PF + 'free-icon-user-219983.png'} alt="Изображение"/>
                        </div>
                       <MyButton>Выйти</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;