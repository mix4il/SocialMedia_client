import React, {useEffect, useState} from 'react';
import MyInput from "../UI/MyInput/MyInput";
import DialogItem from "../DialogItem/DialogItem";

import './ChatMenu.css'

import {getAllConversation} from "../../API/ServicesAPI";

const ChatMenu = ({currentUser, setCurrentChat}) => {

    const [conversations, setConversations] = useState([]);

    useEffect(()=>{
        const fetchGetConversation = async ()=>{
            const res = await getAllConversation(currentUser._id);
            setConversations(res.data);
        }
        fetchGetConversation();
    },[currentUser._id]);


    return (
        <div className="chat-menu">
            <div className="chat-header">
                <h1 className="chat-title">Сообщения</h1>
                <MyInput placeholder="Найти диалог"/>
            </div>
            <div className="dialog-wrapper">
                {
                    conversations.length
                    ? conversations.map((c,index) => <div  onClick={() => setCurrentChat(c)}>
                            <DialogItem
                                currentUser={currentUser}
                                conversation={c}
                            />
                            </div>
                        )
                        : <div > У вас нет чатов ...</div>
                }
            </div>
        </div>
    );
};

export default ChatMenu;