import React from 'react';

import './CheckboxList.css'

import MyCheckbox from "../UI/MyCheckbox/MyCheckbox";


const CheckboxList = ({filter,setFilter ,items, filterName}) => {

    function check(value){
        return filter[filterName].includes(value);
    }

    const changeFilter = (value, filterName) =>{
        if(check(value)){
            setFilter({...filter, [filterName]: filter[filterName].filter(item => item !== value)})
        }else{
            setFilter({...filter, [filterName]: [...filter[filterName], value]})
        }
    }

    return (
        <div className="checkboxList-wrapper">
            {items.map((item) => {
                return <MyCheckbox
                    key={item}
                    value={item}
                    isChecked={check(item)}
                    filterName={filterName}
                    setIsChecked={changeFilter}
                />
            })}
        </div>
    );
};

export default CheckboxList;