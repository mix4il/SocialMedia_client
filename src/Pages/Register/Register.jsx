import React, {useState} from 'react';
import MyInput from "../../Components/UI/MyInput/MyInput";

import "./Register.css"
import MySelect from "../../Components/UI/MySelect/MySelect";
import MyButton from "../../Components/UI/MyButton/MyButton";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    return (
        <form className="register">
            <div className="register-wrapper">
                <span className="register-logo">VSporte</span>
                <span className="register-title">Регистрация</span>
                <MyInput kind='green' placeholder="Введите ваш e-mail" value={email} onChange={(event) => changeInput(event, 'email')}/>
                <MyInput kind='green' placeholder="Введите ваш пароль" value={password} onChange={(event) => changeInput(event, 'password')}/>
                <div className="register-row">
                    <div className="input-line">
                        <span className="input-name">Ваш возраст</span>
                        <MyInput kind='green' type="number" />
                    </div>
                    <div className="input-line">
                        <span>Основной вид спорта</span>
                        <MySelect
                            options={[{value:"hockey", body:'хоккей'},{value:"football", body:'футбол'},{value:"volleyball", body:'волейбол'}]}
                        />
                    </div>
                </div>
                <div className="register-row">
                    <MyInput kind='green' placeholder="введите имя"/>
                    <MyInput kind='green' placeholder="введите фамилию"/>
                </div>
                <span>Необязательное поле</span>
                <textarea className="textarea-register" rows="4" cols="45" name="text" placeholder="введите информацию о себе"/>
                <span>Необязательное поле</span>
                <MyInput kind="green" type="tel" placeholder="Введите номер телефона"/>
                <div className="last-row-register">
                    <div>
                        <span>Есть аккаунт? </span>
                        <a href="#" className="auth">Авторизация</a>
                    </div>
                    <MyButton>Зарегистрироваться</MyButton>
                </div>
            </div>
        </form>
    );
};

export default Register;