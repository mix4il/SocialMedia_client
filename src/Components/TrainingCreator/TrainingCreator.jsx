import React, {useContext, useEffect, useState} from 'react';
import {getTrainingsCreator, getTrainingsEntry} from "../../API/ServicesAPI";
import MyButton from "../UI/MyButton/MyButton";
import {AuthContext} from "../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";

import './TrainingCreator.css'

const TrainingCreator = ({userId}) => {
    const [trainingsCreating, setTrainingsCreating] = useState([]);
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);


    useEffect(()=>{
        const fetchTrainingsEntry = async () =>{
            const response = await getTrainingsCreator(userId);
            setTrainingsCreating(response.data);
        }
        fetchTrainingsEntry();
    }, [])

    return (
        <div className="trainingsCreator-entry-wrapper">
            <div className="trainingsCreator-titleName">
                Собственные тренировки
            </div>
            <hr/>
            {
                trainingsCreating.length
                    ?
                    trainingsCreating.map((training)=>{
                        return <div className="trainingsCreator-item">
                            <span className="trainingsCreator-item-title">{training.title}</span>
                            <div className="trainingsCreator-item-center">
                                <div>
                                    Участников: {training.members.length}
                                </div>
                                <MyButton small onClick={()=>{navigate(`/training/${training._id}`)}}>Узнать подробности</MyButton>
                            </div>
                        </div>
                    })
                    : <div className="trainingsCreator-item-title">вы не организовываете тренировки</div>
            }
        </div>
    );
};

export default TrainingCreator;