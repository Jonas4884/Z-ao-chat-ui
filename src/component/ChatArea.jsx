import React from "react";

export const Chat = ( props)=>{
    const [ChatList,userData] = props
    return (
        <>
            {
                ChatList.map((value,idx)=>{
                    <li className="message" key={idx}>
                        {value.senderName !== userData.username && <div className="avatar">{value.senderName}</div> }
                        <div className="message_data">{value.message}</div>
                        {value.senderName === userData.username && <div className="avatar self">{value.senderName}</div> }

                    </li>
                })
            }
        </>
    )
}