import React, {useState} from 'react';
import './Searchbar.css'
import MyInput from "../UI/MyInput/MyInput";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import CheckboxList from "../CheckboxList/CheckboxList";

const Searchbar = ({filter, setFilter}) => {
    const [isShowCategory, setIsShowCategory] = useState(false);
    const [isShowPrice, setIsShowPrice] = useState(false);
    const [isShowLevel, setIsShowLevel] = useState(false);
    const [isShowDate, setIsShowDate] = useState(false);

    function onSearch (event){
        event.preventDefault();
        setFilter({...filter, search: event.target.value});
    }

    function onSetPrice(event, typePrice){
        event.preventDefault();
        setFilter({...filter, [typePrice]: event.target.value})
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <div className="searchbar-search">
                    <MyInput placeholder="Поиск по названию"
                             value={filter.search}
                             onChange={(event)=>onSearch(event)}
                    />
                </div>
                <hr/>
                <CategoryFilter
                    name="Категория"
                    setIsShow={setIsShowCategory}
                    isShow={isShowCategory}>
                    <CheckboxList
                        filter={filter}
                        setFilter={setFilter}
                        items={['хоккей', 'футбол', 'волейбол']}
                        filterName={'category'}
                    />
                </CategoryFilter>
                <hr/>
                <CategoryFilter
                    name="Уровень подготовки"
                    setIsShow={setIsShowLevel}
                    isShow={isShowLevel}>
                    <CheckboxList
                        filter={filter}
                        setFilter={setFilter}
                        items={['начинающие', 'полупрофессиональный', 'профессиональный']}
                        filterName={'level'}
                    />
                </CategoryFilter>
                <hr/>
                <CategoryFilter
                    name="Цена"
                    setIsShow={setIsShowPrice}
                    isShow={isShowPrice}>
                    <div className="category-price">
                        <MyInput kind="small"
                                 placeholder="От 0"
                                 value={filter.minPrice}
                                 onChange={(event) => onSetPrice(event, 'minPrice')}
                        />
                        <MyInput kind="small"
                                 placeholder="До 40000"
                                 value={filter.maxPrice}
                                 onChange={(event) => onSetPrice(event, 'maxPrice')}/>
                    </div>
                </CategoryFilter>
                <hr/>
                <CategoryFilter
                    name="Дата проведения тренировки"
                    setIsShow={setIsShowDate}
                    isShow={isShowDate}>
                    <div className="category-date">
                        <span className="category-date-title">выберите диапазон дат</span>
                        <MyInput kind="small" type="datetime-local"/>
                        <MyInput kind="small" type="datetime-local"/>
                    </div>
                </CategoryFilter>
            </div>
        </div>
    );
};

export default Searchbar;