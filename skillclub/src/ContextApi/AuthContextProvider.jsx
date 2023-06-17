import React, { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const AuthContext=createContext();

function AuthContextProvider({children}) {

    const [login,setLogin]=useState(false);
    const [signinData,setSigninData]=useState("");
    const storeSignin=(data)=>{
         setSigninData(data);
    }
    useEffect(()=>{
       console.log(signinData,"from context api updated")
    },[signinData])
    const toggleLogin=(boolean)=>{
       if(boolean==="true"){
        setLogin(true);
       }
    }
    useEffect(()=>{
console.log(login,"changed login status");
    },[login]);

  return (
     <AuthContext.Provider value={{login,toggleLogin,storeSignin,signinData}}>
       {children}
     </AuthContext.Provider>
     )
}

export default AuthContextProvider