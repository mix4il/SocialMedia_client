import React, {useEffect, useState} from 'react';
import Feed from "../../Components/Feed/Feed"
import Searchbar from "../../Components/Searchbar/Searchbar";
import {useFilterPrice, useFilterTrainings} from "../../hooks/useFilter";
import axios from "axios";

const Home = () => {
    const [filter, setFilter] = useState({category: [], level: [], minPrice: 0, maxPrice: 0,search: ''});


    const [trainings, setTrainings] = useState([]);


    useEffect( ()=>{
        const fetchTraining = async () =>{
            const res = await axios.get('http://localhost:8000/training');
            setTrainings(res.data);
        }
        fetchTraining();
    }, [])

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