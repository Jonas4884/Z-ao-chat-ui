import React, { useState } from "react";
import { Interface } from "readline";
import { Login } from "../core/Login";
import { message } from "./utils/message";
import { stompClient } from "./utils/stompenv";


export const ChatRoom =  () =>{
    userData = {
        username:'',
        receivername:'',
        connected:false,
        messageContent:''
    }

    const [userData,setUserData] = useState();
    const [publicChat,setpublicChat] = useState([]);
    const [privateChat, setprivateChat] = useState(new Map())
    const handleUserLogin = (event) =>{
       const {value} = event.target.value
       setUserData({...userData,"username" : value})
    }
    
    const registerUser = ()=>{
        let Sock = new SockJS('http://localhost:8080/ws')
        stompClient=over(Sock)
        stompClient.connect({},onConnected,onError)
    }

    const onConnected = () =>{
        setUserData({...userData,'connected':true});
        stompClient.subscribe('/chatroom/public',onMessageReceived);
        stompClient.subscribe('/user/'+userData.userName+'/private',onPrivateMessageReceived);
    }

    const onMessageReceived = (payload) =>{
        let payloadData = JSON.parse(payload.body)
        switch(payloadData){
            case  'JOIN' :
                break;
            case 'MESSAGE':
                publicChat.push(payloadData);
                setpublicChat([...publicChat])
                break;

        }
    }

    const onError = (err)=>{
        console.log(err);    
    }

    const onPrivateMessageReceived = (payload) =>{

    }


    return(
         <div className="container">
            {
                userData.connected ? <>
                    <Login
                        userName = {"Username"}
                        userValue={userData.username}
                        handeleUserValue={handleUserLogin}
                    />
                </> : <>

                </>

            }

         </div>
    )
}