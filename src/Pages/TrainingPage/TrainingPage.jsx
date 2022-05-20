import React, {useState} from 'react';
import './TrainingPage.css'
import MyButton from "../../Components/UI/MyButton/MyButton";
import ConfirmationModal from "../../Components/ confirmationModal/ConfirmationModal";
import MyModal from "../../Components/UI/MyModal/MyModal";

const TrainingPage = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [training, setTraining] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [visible, setVisible] = useState(false);


    const viewModal = () =>{
        setVisible(true);
    }

    return (
        <div className="training-page">
            <MyModal visible={visible} setVisible={setVisible}>
                <ConfirmationModal setVisible={setVisible} title="Отменить запись?"/>
            </MyModal>
            <div className="training-wrapper">
                <div className="training-leftbar">
                    <img className="training-page-img" src={PF + 'image-1.png'} alt="Изображение"/>
                    <div className="training-creator-panel">
                        <span>Организатор</span>
                        <img className="creator-avatar" src={PF + 'free-icon-user-219983.png'} alt="Изображение"/>
                        <span className="creator-name">Олег Иванов</span>
                        <span>Рейтинг организатора: </span>
                    </div>
                </div>
                <div className="training-rightbar">
                    <div className="training-page-info">
                        <div className="title-wrapper">
                            <span className="training-page-title">Тренировка по футболу</span>
                        </div>
                        <hr/>
                        <div className="info-wrapper">
                            <span className="info-text">Вид спорта: футбол</span>
                            <span className="info-text">Дата и время проведения:</span>
                            <span className="info-text">Цена: 300 руб</span>
                            <span className="info-text">Уровень спотсменов: начальный</span>
                            <span className="info-text">Место проведения: Ново-Вокзальная ул., 70а, Самара, Самарская обл.</span>
                            <span className="info-text">Команда: сборная</span>
                            <span className="info-text">Максимальное количество участников: 30</span>
                            <span className="info-text">Текущее количество записавшихся участников: 21</span>
                            <MyButton onClick={() => viewModal()}>Записаться на тренировку</MyButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingPage;