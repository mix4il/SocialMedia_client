import React from 'react';
import './Navbar.css'
import {MdAssignment, MdHome, MdMessage} from "react-icons/md";
import {FaUserFriends} from "react-icons/fa";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {


    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <ul className="navbar-list">
                    <NavLink to={'/profile'} className={"navbar-item"}>
                        <MdHome size={25}/>
                        <span>Личный кабинет</span>
                    </NavLink>
                    <NavLink to={'/'} className={"navbar-item"}>
                        <MdAssignment size={25}/>
                        <span>Запись на тренировку</span>
                    </NavLink>
                    <NavLink to={'/messages'} className={"navbar-item"}>
                        <MdMessage size={25}/>
                        <span>Сообщения</span>
                    </NavLink>
                    <NavLink to={'friends'} className={"navbar-item"}>
                        <FaUserFriends size={25}/>
                        <span>Друзья</span>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;