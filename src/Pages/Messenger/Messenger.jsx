import React, {useContext, useEffect, useRef, useState} from 'react';

import './Messenger.css'
import ChatMenu from "../../Components/ChatMenu/ChatMenu";
import ChatBox from "../../Components/ChatBox/ChatBox";
import {AuthContext} from "../../context/AuthContext";

import {io} from "socket.io-client"


const Messenger = () => {
    const {user} = useContext(AuthContext);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [textMessage, setTextMessage] = useState('');
    const socket = useRef();


    useEffect(()=>{
        socket.current = io("ws://localhost:8900") || null;
    }, [])

    useEffect(()=>{
        socket.current?.emit("AddUser", user._id);
        socket.current?.on("GetUsers", (users)=>{
            console.log(users);
        })
    }, []);

    useEffect(()=>{
        socket.current?.on("welcome",(message)=>{
            console.log(message);
        });
    },[socket]);



    return (
        <div className="messenger">
            <div className="messenger-wrapper">
                <ChatMenu currentUser={user} setCurrentChat={setCurrentChat}/>
                {
                    currentChat
                        ? <ChatBox currentUser={user}
                                   socket={socket}
                                   currentChat={currentChat}
                                   setCurrentChat={setCurrentChat}
                                   messages={messages}
                                   setMessages={setMessages}
                                   textMessage={textMessage}
                                   setTextMessage={setTextMessage}
                        />
                        : <div className="select-chat" >Выберите чат для ообщения</div>
                }
            </div>
        </div>
    );
};

export default Messenger;