import React, {useState} from 'react';
import MyInput from "../../Components/UI/MyInput/MyInput";
import { yupResolver } from "@hookform/resolvers/yup";

import "./Register.css"
import MySelect from "../../Components/UI/MySelect/MySelect";
import MyButton from "../../Components/UI/MyButton/MyButton";
import {useForm} from "react-hook-form";

import {registerSystem} from "../../API/ServicesAPI";
import {schemaRegister} from "./validation";
import {useNavigate} from "react-router-dom";


const Register = () => {

    const navigation = useNavigate();

    const {register, handleSubmit, formState: {errors,isValid}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schemaRegister)
    });

    const onUpdate = async (data) =>{
        await registerSystem(data);
        navigation("/login")
        console.log(data);
    }

    return (
        <form className="register" onSubmit={handleSubmit(onUpdate)}>
            <div className="register-wrapper">
                <span className="register-logo">VSporte</span>
                <span className="register-title">Регистрация</span>
                <MyInput kind='green' placeholder="Введите ваш e-mail" error={errors.email} {...register("email")}/>
                <p className="register-error">{errors.email?.message}</p>
                <MyInput kind='green' placeholder="Введите ваш пароль" error={errors.password} {...register("password")}/>
                <p className="register-error">{errors.password?.message}</p>
                <div className="register-row">
                    <div className="input-line">
                        <span className="input-name">Ваш возраст</span>
                        <MyInput kind='green' type="number"
                                 error={errors.age}
                                 {...register("age")}/>
                    </div>
                    <div className="input-line">
                        <span>Основной вид спорта</span>
                        <MySelect
                            options={[{value:"hockey", body:'хоккей'},{value:"football", body:'футбол'},{value:"volleyball", body:'волейбол'}]}
                            {...register("sport")}
                        />
                        <p className="register-error">{errors.sport?.message}</p>
                    </div>
                </div>
                <div className="register-row">
                    <MyInput kind='green' placeholder="введите имя" error={errors.firstname} {...register("firstname")}/>
                    <MyInput kind='green' placeholder="введите фамилию" error={errors.lastname} {...register("lastname")}/>
                </div>
                <span>Необязательное поле</span>
                <textarea className="textarea-register" rows="4" cols="45" name="text"
                          placeholder="введите информацию о себе" {...register("desc")}/>
                <span>Необязательное поле</span>
                <MyInput kind="green" type="tel" placeholder="Введите номер телефона"
                         error={errors.phone}
                         {...register("phone")}/>
                <p className="register-error">{errors.phone?.message}</p>
                <div className="last-row-register">
                    <div>
                        <span>Есть аккаунт? </span>
                        <a href="#" className="auth">Авторизация</a>
                    </div>
                    <MyButton disabled={!isValid}>Зарегистрироваться</MyButton>
                </div>
            </div>
        </form>
    );
};

export default Register;