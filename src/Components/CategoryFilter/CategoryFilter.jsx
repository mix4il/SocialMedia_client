import React from 'react';
import './CategoryFilter.css'
import {BiDownArrow, BiUpArrow} from "react-icons/bi";

const CategoryFilter = ({children, isShow, setIsShow, name}) => {

    function onChangeShow(){
        setIsShow(!isShow);
    }

    return (
        <div>
            <div className="category" onClick={onChangeShow}>
                <div className="category-head" >
                    {isShow ? <BiUpArrow size={20}/> : <BiDownArrow size={20}/> }
                    <span className={"category-name"}>{name}</span>
                </div>
            </div>
            {isShow && children}
        </div>

    );
};

export default CategoryFilter;