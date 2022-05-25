import React, {useEffect, useState} from 'react';

import './DialogItem.css'
import {getUser} from "../../API/ServicesAPI";

const DialogItem = ({currentUser, conversation}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [user, setUser] = useState(null);

    useEffect(() =>{
        const fetchUser = async () =>{
            const userId = conversation.members.find(m => m !== currentUser._id);
            console.log(userId);
            const res = await getUser(userId);
            console.log("sdkvmsdvmlksmdv")
            setUser(res.data);
        }
        fetchUser();
    },[])

    return (
        <div className="dialog-item">
            <img className="dialog-item-img" src={user?.img ? PF + user?.img : PF + 'free-icon-user-219983.png'} alt="Аватарка" />
            <p className="user-name">{`${user?.firstname} ${user?.lastname}`}</p>
        </div>
    );
};

export default DialogItem;