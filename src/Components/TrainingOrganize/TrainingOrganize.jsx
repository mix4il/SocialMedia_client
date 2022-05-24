import React, {useContext, useEffect, useState} from 'react';
import {getTrainingsCreator, getTrainingsEntry} from "../../API/ServicesAPI";
import MyButton from "../UI/MyButton/MyButton";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const TrainingOrganize = ({userId}) => {

    const [trainingsOrganize, setTrainingsOrganize] = useState([]);
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);

    console.log(user.trainings);

    useEffect(()=>{
        const fetchTrainingsOrganize= async () =>{
            const response = await getTrainingsCreator(userId);
            setTrainingsOrganize(response.data);
        }
        fetchTrainingsOrganize();
    }, [])
    
    return (
        <div className="trainings-entry-wrapper">
            <div className="trainings-titleName">
                Организовывает тренировки
            </div>
            <hr/>
            {
                trainingsOrganize.length
                    ?
                    trainingsOrganize.map((training)=>{
                        return <div className="training-item">
                            <span className="training-item-title">{training.title}</span>
                            <div className="training-content">
                                <div className="training-textInfo">
                                    <span className="training-info-text">Дата и время проведения: 20:15</span>
                                    <span className="training-info-text">Место проведения: {training.location}</span>
                                </div>
                                <div className="training-buttons">
                                    <Link to={`/training/${training._id}`}>
                                        <MyButton small>Узнать подробности</MyButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    })
                    : <div className="training-item-title">Пользователь не организовывает тренировки</div>
            }
        </div>
    );
};

export default TrainingOrganize;