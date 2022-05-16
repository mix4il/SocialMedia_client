import React from 'react';
import {Link} from 'react-router-dom'
import './Training.css'

const Training = ({training}) => {
    return (
        <div className="training">
            <img className="training-img" src={require('../../assets/image 1.png')} alt="Изображение тренировки"/>
            <div className="training-info">
                <h2 className="training-title">{training.title}</h2>
                <h3 className="training-text">Уровень подготовленности: {training.level}</h3>
                <h3 className="training-text">Адрес: {training.adress}</h3>
                <h3 className="training-text">Категория: {training.category}</h3>
                <div className="data">
                    <h3 className="training-text">Дата проведения: 15-05-21 </h3>
                    <h3 className="training-text">Начало: 18:00</h3>
                    <h3 className="training-text">Окончание: 19:30</h3>
                </div>
                <div className="last-row">
                    <h3 className="training-text">Цена: {training.price}</h3>
                    <Link to="/" className="training-link">Записаться</Link>
                </div>
            </div>
        </div>
    );
};

export default Training;