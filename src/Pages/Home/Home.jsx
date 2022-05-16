import React, {useState} from 'react';
import Feed from "../../Components/Feed/Feed"
import Searchbar from "../../Components/Searchbar/Searchbar";
import {useFilterPrice, useFilterTrainings} from "../../hooks/useFilter";

const Home = () => {
    const [filter, setFilter] = useState({category: [], level: [], minPrice: 0, maxPrice: 0,search: ''});


    const [trainings, setTrainings] = useState([
        {id:1, title : 'Тренировка по футболу', price : 300, category: 'хоккей', level:'начинающие',
            address: "Николаевский просп., 4, Самарская обл., Россия, 443085"},
        {id:2, title : 'Тренировка по футболу', price : 300, category: 'футбол', level:'начинающие',
            address: "Николаевский просп., 4, Самарская обл., Россия, 443085"},
        {id:3, title : 'Тренировка по футболу', price : 300, category: 'хоккей', level:'профессиональный',
            address: "Николаевский просп., 4, Самарская обл., Россия, 443085"},
        {id:4, title : 'Тренировка по футболу', price : 300, category: 'хоккей', level:'начинающие',
            address: "Николаевский просп., 4, Самарская обл., Россия, 443085"},
    ]);

    const filteredTrainings =  useFilterTrainings(trainings, filter.search, filter.minPrice, filter.maxPrice, filter.level, filter.category);

    return (
        <>
            <Feed
                trainings={filteredTrainings}
            />
            <Searchbar
            filter={filter}
            setFilter={setFilter}/>
        </>
    );
};

export default Home;