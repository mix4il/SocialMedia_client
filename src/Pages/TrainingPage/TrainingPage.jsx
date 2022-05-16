import React, {useState} from 'react';
import './TrainingPage.css'

const TrainingPage = () => {
    const [training, setTraining] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    return (
        <div className="training-page">
            <div className="training-wrapper">
                <div className="training-leftbar">
                    <img className="training-img" alt="Изображение"/>
                    <div className="training-creator-panel">
                        <span>Организатор</span>
                        <img className="creator-avatar" alt="Изображение"/>
                        <span className="creator-name">Олег</span>
                        <span className="creator-name">Рейтинг организатора: </span>
                    </div>
                </div>
                <div className="training-rightbar">
                    <div className="training-info">
                        .
                        <span className="training-title">Тренировка по футболу</span>
                        <hr/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingPage;