import axios from "axios";

export const loginSystem = async (user, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try {
        const res = await axios.post("http://localhost:8000/auth/login", user);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch (err) {
        dispatch({type: "LOGIN_ERROR", payload: err});
    }
}



export const registerSystem = async (user)=>{
    try{
        const res = await axios.post('http://localhost:8000/auth/register', user);
    }catch (e){
        console.log(e.message);
    }
}

export const getTrainingPage = async (trainingId) =>{
    try{
        return await axios.get(`http://localhost:8000/training/${trainingId}`);
    }catch (e){
        console.log(e.message);
    }
}

export const getUser = async (userId) => {
    try {
        return await axios.get(`http://localhost:8000/users/${userId}`)
    } catch (e) {
        console.log(e.message);
    }
}

export const getTrainingsEntry = async (userId) => {
    try {
        return await axios.get(`http://localhost:8000/users/${userId}/trainings`)
    } catch (e) {
        console.log(e.message);
    }
}



export const getTrainingsCreator = async (userId) => {
    try {
        return await axios.get(`http://localhost:8000/training/${userId}/userCreator`);
    } catch (e) {
        console.log(e.message);
    }
}

//создание тренировки

export const createTraining = async (training) => {
    try{
        const res = await axios.post('http://localhost:8000/training/', training);
    }catch (e){
        console.log(e.message);
    }
}

export const postTrainingsEntry = async (userId, trainingId) => {
    try {
        return await axios.post(`http://localhost:8000/training/${trainingId}/entry`, {
            userId: userId
        })
    } catch (e) {
        console.log(e.message);
    }
}

//Отменить запись на тренировку
export const cancelEntryTraining = async (userId, trainingId, dispatch) => {
    try {
        const res = await axios.post(`http://localhost:8000/training/${trainingId}/cancelEntry`, {
            userId : userId
        });
        dispatch({type: "TRAINING_CANCEL", payload: trainingId});
    } catch (e) {
        console.log(e.message);
    }
}

//запись на тренировку
export const postEntryTraining = async (userId, trainingId, dispatch) => {
    try {
        const res = await axios.post(`http://localhost:8000/training/${trainingId}/entry`, {
            userId : userId
        });
        dispatch({type: "TRAINING_ENTRY", payload: trainingId});
    } catch (e) {
        console.log(e.message);
    }
}


//РАБОТА С ЧАТОМ

export const getAllConversation = async (userId) => {
    try {
        return await axios.get('http://localhost:8000/conversation/' + userId);
    } catch (e) {
        console.log(e.message());
    }
}

export const getConversation = async (senderId, receiverId) =>{
    try {
        return await axios.get(`http://localhost:8000/conversation/find/${senderId}/${receiverId}`);
    } catch (e) {
        console.log(e.message());
    }
}

export const getMessages = async (conversationId) =>{
    try {
        return await axios.get(`http://localhost:8000/message/` + conversationId);
    } catch (e) {
        console.log(e.message());
    }
}


export const postMessage = async (message) =>{
    try {
        return await axios.post(`http://localhost:8000/message/`, message);
    } catch (e) {
        console.log(e.message());
    }
}



