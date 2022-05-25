import React, {useEffect, useRef, useState} from 'react';

import './ChatBox.css'
import Message from "../Message/Message";
import MyButton from "../UI/MyButton/MyButton";
import {getMessages, postMessage} from "../../API/ServicesAPI";
const ChatBox = ({currentChat, currentUser, messages, setMessages, textMessage, setTextMessage, socket}) => {

    const scrollRef = useRef();


    useEffect(()=>{
        const fetchMessages = async ()=>{
            const res = await getMessages(currentChat._id);
            setMessages(res.data);
        }
        fetchMessages();
    }, [currentChat]);

    useEffect(() =>{
        scrollRef.current?.scrollIntoView({behavior: 'smooth'});
        console.log("no");
        socket.current?.on("getMessage", (message)=>{
            console.log("yeees");
            console.log(message);
        })
    }, [messages])


    const handleClick = async(e)=>{
        e.preventDefault();
        const newMessage = {
            senderId: currentUser._id,
            conversationId: currentChat._id,
            text: textMessage,
        }

        const receiverId = currentChat.members.find(m => m !== currentUser._id);

        socket.current?.emit("SendMessage", {
            senderId: currentUser._id,
            receiverId,
            text: textMessage,
        })

        const res = await postMessage(newMessage);
        setMessages([...messages, res.data]);
        setTextMessage('');
    };

    const changeInput = (e) =>{
        e.preventDefault();
        setTextMessage(e.target.value);
    }


    return (
        <div className='chat-box'>
            <div className="chat-box-wrapper">
                {
                    messages.map((m, index) =>  <div key={new Date().getTime() + index } ref={scrollRef}>
                        <Message key={new Date().getTime() - index } message={m} own={currentUser._id === m.senderId}/>
                    </div>)
                }
            </div>
            <hr/>
            <div className="chatBoxBottom">
                <textarea className="message-input"
                          placeholder="Введите сообщение"
                          value={textMessage}
                          onChange={(e) => {changeInput(e)}}
                />
                <MyButton onClick={handleClick} disabled={!textMessage}>Отправить</MyButton>
            </div>
        </div>
    );
};

export default ChatBox;