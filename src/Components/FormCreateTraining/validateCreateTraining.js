import * as yup from "yup";


export const schemaCreateTraining = yup.object().shape({
    title: yup.string().required('Введите название тренировки'),
    price: yup.string().required('Введите цену'),
    sport: yup.string().required('Выберите вид спорта'),
    level: yup.string().required('Выберите уровень подготовки спортсменов'),
    location: yup.string().required('Укажите местоположение тренировки'),
    maxMembers: yup.number().positive('Укажите максимальное количество учатнисков').integer().required('Введите возраст'),
    desc: yup.string(),
    date: yup.date('Выберите вид спорта').required('Выберите вид спорта'),
});
