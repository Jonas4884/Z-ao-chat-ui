import React from "react";


export const ChatBox = (props) =>{
    const [memberlist,chatID] = props;
    return(
        <>
            <div className={chatID}>
                <div className="member-list">
                    <ul>
                        <li>Z'ao-Chat</li>
                        {[...memberlist.keys()].map((value,idx)=>{
                            <li className="member" key={idx}>
                                {value}
                            </li>
                        })}
                    </ul>

                </div>
            </div>
        </>
    )
}