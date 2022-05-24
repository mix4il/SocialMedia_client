import React, {useContext, useEffect, useState} from 'react';
import MyButton from "../UI/MyButton/MyButton";
import {cancelEntryTraining, getTrainingsEntry} from "../../API/ServicesAPI";

import './TrainingsEntry.css'
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import ConfirmationModal from "../ confirmationModal/ConfirmationModal";
import MyModal from "../UI/MyModal/MyModal";
import {toast, ToastContainer} from "react-toastify";

const TrainingsEntry = ({userId, openModal}) => {

    const {user, dispatch} = useContext(AuthContext);

    const [trainings, setTrainings] = useState([]);
    const [isEntry, setIsEntry] = useState(user.trainings.includes());
    const [visibleModalCancel, setVisibleModalCancel] = useState(false);
    const [currentModalCancel, setCurrentModalCancel] = useState(null);


    const notify = () => toast.success("Запись отменена");


    useEffect(()=>{
        const fetchTrainingsEntry = async () =>{
            const response = await getTrainingsEntry(userId);
            setTrainings(response.data);
        }
        fetchTrainingsEntry();
    }, [user, userId]);


    const cancelTrainingAndUpdate = async (userId, trainingId, dispatch) =>{
        const cancel = await cancelEntryTraining(userId, trainingId, dispatch);
        setVisibleModalCancel(false);
        notify();
    }

    const viewModal = (trainingId) =>{
        setCurrentModalCancel(trainingId);
        setVisibleModalCancel(true);
    }

    return (

        <div className="trainings-entry-wrapper">
            <div className="trainings-titleName">
                Предстоящие записи
            </div>
            <hr/>
            {
                trainings.length
                ?
                trainings.map((training)=>{
                    return <div className="training-item">
                        <span className="training-item-title">{training.title}</span>
                        <div className="training-content">
                            <div className="training-textInfo">
                                <span className="training-info-text">Дата и время проведения: 20:15</span>
                                <span className="training-info-text">Место проведения: {training.location}</span>
                            </div>
                            <div className="training-buttons">
                                <Link to={`/training/${training._id}`}>
                                    <MyButton small>перейти к тренировке</MyButton>
                                </Link>
                                <MyButton red  small onClick={() => viewModal(training._id)}> Отменить запись</MyButton>
                            </div>
                        </div>
                    </div>
                })
                    : <div className="training-item-title">Вы не записаны на тренировки...</div>
            }
            <MyModal visible={visibleModalCancel} setVisible={setVisibleModalCancel}>
                <ConfirmationModal setVisible={setVisibleModalCancel} title="Отменить запись?"
                                   userId={userId}
                                   currentModalCancel={currentModalCancel}
                                   dispatch={dispatch}
                                   confirmAction={cancelTrainingAndUpdate}/>
            </MyModal>
            <ToastContainer
                position="bottom-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default TrainingsEntry;