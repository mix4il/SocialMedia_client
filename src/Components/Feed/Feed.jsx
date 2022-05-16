import React from 'react';
import './Feed.css'
import Training from "../Training/Training";

const Feed = ({trainings}) => {

    return (
        <div className="feed-container">
            {
                trainings.length > 0
                    ?
                    <div>
                        {trainings.map(training => {
                        return <Training key={training.id} training={training}/>
                    })}
                    </div>
                    :
                    <h2 className="title-error">Тренировок с заданными критериями нет...</h2>
            }
        </div>
    );
};

export default Feed;