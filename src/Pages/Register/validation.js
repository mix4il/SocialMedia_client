import * as yup from "yup";


export const schemaRegister = yup.object().shape({
    firstname: yup.string().required('Введите имя'),
    lastname: yup.string().required('Введите фамилию'),
    email: yup.string().email('Введите валидный email').required('Поле email обязательное'),
    password: yup.string().min(6,'Минимальное количество символов 6').required('Поле пароль обязательное'),
    sport: yup.string().required('Выберите вид спорта'),
    age: yup.number().positive('Введите корректный возраст').integer().required('Введите возраст').round('ceil'),
    desc: yup.string(),
    phone: yup.string().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
        , 'Номер невалидный (используйте только цифры)'),
});