import React from 'react';
import './Navbar.css'
import {MdAssignment, MdHome, MdMessage} from "react-icons/md";
import {FaUserFriends} from "react-icons/fa";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <MdHome size={25}/>
                        <span>Личный кабинет</span>
                    </li>
                    <li className="navbar-item">
                        <MdAssignment size={25}/>
                        <span>Запись на тренировку</span>
                    </li>
                    <li className="navbar-item">
                        <MdMessage size={25}/>
                        <span>Сообщения</span>
                    </li>
                    <li className="navbar-item">
                        <FaUserFriends size={25}/>
                        <span>Друзья</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;