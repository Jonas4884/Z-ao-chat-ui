import React from "react";


export const ChatBox = (props) =>{
    const [memberList,chatID,onClickEvent,chatClass,memberClickEvent] = props;

    return(
        <>
            <div className={chatID}>
                <div className="member-list">
                    <ul>
                        <li onClick={onClickEvent} className={`${chatID} ${chatClass==="CHATROOM" && "active"}`}>Z'ao-Chat</li>
                        {[...memberList.keys()].map((value,idx)=>{
                            <li  key={idx} className={`member ${chatClass===value && "active"}`} onClick={()=>memberClickEvent(value)}>
                                {value}
                            </li>
                        })}
                    </ul>

                </div>
            </div>
        </>
    )
}