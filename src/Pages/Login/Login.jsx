import React, {useContext, useState} from 'react';
import MyInput from "../../Components/UI/MyInput/MyInput";
import MyButton from "../../Components/UI/MyButton/MyButton";

import './Login.css'
import {AuthContext} from "../../context/AuthContext";
import {loginSystem} from "../../API/ServicesAPI";
import MyLoader from "../../Components/UI/MyLoader/MyLoader";
import {Link} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {user, isFetching, isError, dispatch} = useContext(AuthContext);

    const changeInput = (event, input) => {
        event.preventDefault();
        const inputValue = event.target.value;
        if(input === 'email'){
            setEmail(inputValue);
        }
        if(input === 'password'){
            setPassword(inputValue);
        }
    }

    const handleClick = async (event) =>{
        event.preventDefault();
        await loginSystem({email, password}, dispatch);
    }

    return (
        <div className="login">
            <form onSubmit={handleClick} className="login-wrapper">
                <span className="login-logo">VSporte</span>
                <span className="login-title">Авторизация</span>
                <MyInput kind='green' placeholder="Введите ваш e-mail" value={email} type="email"
                         onChange={(event) => changeInput(event, 'email')}/>
                <MyInput kind='green' placeholder="Введите ваш пароль" value={password} type="password"
                         onChange={(event) => changeInput(event, 'password')}/>
                {isError &&  <span className="error">Неверное имя пользователя или пароль...</span>}
                <div className="last-row-login">
                    <div>
                        <span>Нет Аккаунта? </span>
                        <Link to="/register" className="registration">Регистрация</Link>
                    </div>
                    <MyButton disabled={isFetching}>{isFetching ? <MyLoader/> : "Войти"}</MyButton>
                </div>
            </form>
        </div>
    );
};

export default Login;