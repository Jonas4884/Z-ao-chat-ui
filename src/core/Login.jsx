import React from "react";

export const Login =(props)=>{
    const [userName,userValue,handleUserValue] = props;
    return(
        <>
        <input
            type='text'
            id="login-user"
            placeholder={`enter you + ${userName}`}
            value={userValue}
            onChange = {handleUserValue}
        />
        </>
    )
}