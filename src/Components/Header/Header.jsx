import React, {useContext} from 'react';
import './Header.css'
import MyButton from "../UI/MyButton/MyButton";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";

const Header = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const {user} = useContext(AuthContext);

    const onExit = () =>{

    }

    return (
        <div>
            <div className="header-container">
                <div className="header-content">
                    <div className="header-logo">
                        <span>VSporte</span>
                    </div>
                    <div className="header-toolbar">
                        <Link to={`/users/${user._id}`} className="header-profile">
                            <span className="profile-name">{`${user.firstname} ${user.lastname}`}</span>
                            <img className="profile-img" src={user.img ?  PF + user.img : PF + 'free-icon-user-219983.png'}
                                 alt="Изображение"/>
                        </Link>
                       <MyButton onClick={onExit}>Выйти</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;