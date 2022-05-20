import {useMemo} from "react";


export const useFilterCategory = (trainings, filtersCategory) => {
    return useMemo(()=>{
        if(filtersCategory.length > 0 ){
            return trainings.filter(item => filtersCategory.includes(item.sport));
        }
        return trainings;
    }, [trainings, filtersCategory])
}

export const useFilterLevel = (trainings, filtersLevel, filtersCategory) => {
    const filterCategoryTraining = useFilterCategory(trainings, filtersCategory)

    return useMemo(()=>{
        if(filtersLevel.length > 0){
            return filterCategoryTraining.filter(item => filtersLevel.includes(item.level));
        }
        return filterCategoryTraining;
    }, [filterCategoryTraining, filtersLevel])
}

export const useFilterPrice = (training, minPrice, maxPrice,  filtersLevel, filtersCategory) =>{
    const filteredTraining = useFilterLevel( training,filtersLevel, filtersCategory)
    return useMemo(() =>{
        if(maxPrice){
            return filteredTraining.filter(item => item.price >= minPrice && item.price <= maxPrice)
        }
        return filteredTraining;
    }, [filteredTraining, minPrice, maxPrice])
}

export const useFilterTrainings = (training, search, minPrice, maxPrice,  filtersLevel, filtersCategory) =>{
    const filteredArray = useFilterPrice(training, minPrice, maxPrice,  filtersLevel, filtersCategory);

    return useMemo(() =>{
        if(search){
            return filteredArray.filter(item => {
                return item.title.toLowerCase().includes(search.toLowerCase());
            })
        }
        return filteredArray;
    }, [filteredArray, search])
}
