import React from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaRegister} from "../../Pages/Register/validation";
import {createTraining, registerSystem} from "../../API/ServicesAPI";
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";
import MyButton from "../UI/MyButton/MyButton";
import {schemaCreateTraining} from "./validateCreateTraining";
import {toast} from "react-toastify";

import './FormCreateTraining.css'

const FormCreateTraining = ({setVisible, toast, userId}) => {
    const {register, handleSubmit, formState: {errors,isValid}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schemaCreateTraining)
    });


    const onUpdate = async (data) =>{
        await createTraining({
            idCreator: userId,
            ...data
        });
        setVisible(false);
        toast();
    }

    return (
        <form onSubmit={handleSubmit(onUpdate)}>
            <div className="create-wrapper">
                <span className="register-title">Организовать тренировку</span>
                <MyInput kind='green' placeholder="Введите название тренировки" error={errors.email} {...register("title")}/>
                <p className="register-error">{errors.title?.message}</p>
                <div className="register-row">
                    <div className="input-line">
                        <span className="input-name">Цена</span>
                        <MyInput kind='green' type="number"
                                 error={errors.price}
                                 {...register("price")}/>
                    </div>
                    <div className="input-line">
                        <span>Основной вид спорта</span>
                        <MySelect
                            options={[{value:"хоккей", body:'хоккей'},{value:"футбол", body:'футбол'},{value:"волейбол", body:'волейбол'}]}
                            {...register("sport")}
                        />
                        <p className="register-error">{errors.sport?.message}</p>
                    </div>
                </div>
                <div className="register-row">
                    <div className="input-line">
                        <span className="input-name">Максимальное количество участников</span>
                        <MyInput kind='green' type="number"
                                 error={errors.price}
                                 {...register("maxMembers")}/>
                    </div>
                    <div className="input-line">
                        <span>Уровень спортсменов</span>
                        <MySelect
                            options={[{value:"начальный", body:'начальный'},{value:"средний", body:'средний'},
                                {value:"профи", body:'профессиональный'}]}
                            {...register("level")}
                        />
                    </div>
                </div>
                {errors.maxMembers?.message && <p className="register-error">Введите максимальное количество участников</p>}
                <MyInput kind='green' placeholder="Введите местоположение тренировки" error={errors.location} {...register("location")}/>
                {errors.location?.message && <p className="register-error">Введите местоположение тренировки</p>}
                <MyInput kind="small" type="datetime-local" {...register("date")} />
                {errors.date?.message && <p className="register-error">Выберите дату и время начала тренировки</p>}
                <span>Необязательное поле</span>
                <textarea className="textarea-register" rows="4" cols="45" name="text"
                          placeholder="введите дополнительную информацию о тренировке" {...register("desc")}/>
                <MyButton disabled={!isValid} >Создать тренировку</MyButton>
            </div>
        </form>
    );
};

export default FormCreateTraining;