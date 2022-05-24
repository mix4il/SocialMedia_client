import React, {useContext, useEffect, useRef, useState} from 'react';
import './TrainingPage.css'
import MyButton from "../../Components/UI/MyButton/MyButton";
import ConfirmationModal from "../../Components/ confirmationModal/ConfirmationModal";
import MyModal from "../../Components/UI/MyModal/MyModal";
import {Link, useParams} from "react-router-dom";
import {
    cancelEntryTraining,
    entryTraining,
    getTrainingPage,
    getUser,
    postEntryTraining,
    postTrainingsEntry
} from "../../API/ServicesAPI";
import {AuthContext} from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TrainingPage = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const {user, dispatch} = useContext(AuthContext);

    const {trainingId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [training, setTraining] = useState({});
    const [members, setMembers] = useState([]);
    const [userAuthor, setUserAuthor] = useState({});
    const [isEntry, setIsEntry] = useState(false);
    const [visibleModalCancel, setVisibleModalCancel] = useState(false);

    const [visible, setVisible] = useState(false);

    const notifyEntry = () => toast.success("Успешно записались");
    const notifyCancelEntry = () => toast.success("Вы отменили запись на тренировку");


    const viewModal = () =>{
        setVisible(true);
    }

    useEffect(()=>{
        setIsEntry(user.trainings.includes(trainingId));
    }, [user, trainingId])

    const entryTraining = async () =>{
        if(isEntry){
            const res = await cancelEntryTraining(user._id, trainingId, dispatch);
            setIsEntry(false);
            members.pop();
            notifyCancelEntry();
        }else{
            const res = await postEntryTraining(user._id, trainingId, dispatch);
            setIsEntry(true);
            members.push(trainingId);
            notifyEntry();
        }
    }

    const cancelTrainingAndUpdate = async (userId, trainingId, dispatch) =>{
        const cancel = await cancelEntryTraining(userId, trainingId, dispatch);
        setVisibleModalCancel(false);
    }

    const editInfoTraining = async () =>{

    }


    useEffect(()=>{
        const fetchRequest = async ()=>{
            const response = await getTrainingPage(trainingId);
            const training = response.data;
            setTraining(training);
            setMembers(training.members);
            const author = await getUser(training.idCreator);
            setUserAuthor(author.data);
        }
        fetchRequest();
    }, []);



    return (
        <div className="training-page">
            <MyModal visible={visible} setVisible={setVisible}>
                <ConfirmationModal setVisible={setVisible} title="Отменить запись?"/>
            </MyModal>
            <div className="training-wrapper">
                <div className="training-leftbar">
                    <img className="training-page-img" src={training.img ?  PF+ training.img : PF + "image-1.png"} alt="Изображение"/>
                    <div className="training-creator-panel">
                        <Link to={`/users/${userAuthor._id}`} className="training-link-author">
                        <span>Организатор</span>
                            <img className="creator-avatar" src={userAuthor.img ?  PF+ userAuthor.img : PF + 'free-icon-user-219983.png'} alt="Изображение"/>
                            <span className="creator-name">{`${userAuthor.firstname} ${userAuthor.lastname}`}</span>
                        <span>Рейтинг организатора: </span>
                        </Link>
                    </div>
                </div>
                <div className="training-rightbar">
                    <div className="training-page-info">
                        <div className="title-wrapper">
                            <span className="training-page-title">{training.title}</span>
                        </div>
                        <hr/>
                        <div className="info-wrapper">
                            <span className="info-text">Вид спорта: {training.sport}</span>
                            <span className="info-text">Дата и время проведения:</span>
                            <span className="info-text">Цена: {training.price}</span>
                            <span className="info-text">Уровень спотсменов: {training.level}</span>
                            <span className="info-text">Место проведения: {training.location}</span>
                            <span className="info-text">Команда: сборная</span>
                            <span className="info-text">Максимальное количество участников: {training.maxMember}</span>
                            <span className="info-text">Текущее количество записавшихся участников: {members.length}</span>
                            {
                                userAuthor._id === user._id
                                    ?<MyButton onClick={editInfoTraining} >Редактировать информацию</MyButton>
                                    :<MyButton onClick={entryTraining} red={isEntry}>
                                        {
                                            isEntry ? "Отменить запись на тренировку" : "Записаться на тренировку"
                                        }
                                    </MyButton>
                            }
                            <MyModal visible={visibleModalCancel} setVisible={setVisibleModalCancel}>
                                <ConfirmationModal setVisible={setVisibleModalCancel} title="Отменить запись?"
                                                   currentModalCancel={trainingId}
                                                   dispatch={dispatch}
                                                   confirmAction={cancelTrainingAndUpdate}/>
                            </MyModal>
                            <ToastContainer
                                position="bottom-right"
                                autoClose={3000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingPage;