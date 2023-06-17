import React, { useEffect } from 'react'
import "../Styles/Signup.css"
import { Link, Navigate } from "react-router-dom"
import { useState } from 'react'
// import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthContextProvider'
const Signup = () => {
  
    const {storeSignin}=useContext(AuthContext);
    
 const [user,setUser]=useState("");
 const [password,setPassword]=useState("");
 const [email,setEmail]=useState("");
 const [reEnter,setReenter]=useState("");
 const [check,setCheck]=useState("");
 const buttonAction=(e)=>{
       if(e.target.name==="username"){
          setUser(e.target.value);
          console.log(e.target.value)
       }
       if(e.target.name==="password"){
        setPassword(e.target.value);
        console.log(e.target.value)
       }
       if(e.target.name==="email"){
        setEmail(e.target.value);
        console.log(e.target.value)
       }
       if(e.target.name==="re-enter"){
         setReenter(e.target.value);
         console.log(e.target.value)
       }
       
 }

  const signCredentials=async(data)=>{

        try{
            let res=await fetch(`https://skillclubserverdata.onrender.com/users`, {
                method: "POST", // or 'PUT'
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
            let postData=await res.json();
            console.log(postData);
        
        }catch(err){
            console.log(err);
        }
  }
//   user data credentials POST to the server successfull
   const submitCredentials=(e)=>{
        e.preventDefault();
        console.log(user,"\n",password,"\n",email,"\n",reEnter)
        if(password===reEnter){
           setCheck({id:Math.random(),user,email,password});
           signCredentials({id:Math.random(),user,email,password});
           storeSignin({id:Math.random(),user,email,password})
        }else{
            setCheck(false);
        }
   }
   useEffect(()=>{
      console.log(check,"from api confirm to be loggedIn");
   },[check]);
    useEffect(()=>{
      console.log(user,password,email,reEnter)
    },[user,password,email,reEnter]);

  return (
  <>
  {
    check&&<Navigate to="/profile"/>
  }
  <div id="signupMain">
    <div>
      <form class="form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        {/* <div class="flex"> */}
        <label>
            <input required="" name="username" placeholder="" type="text" class="input" onChange={buttonAction} />
            <span>User name</span>
        </label>

        {/* <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Lastname</span>
        </label> */}
    {/* </div>   */}
            
    <label>
        <input required="" name="email" placeholder="" type="email" class="input" onChange={buttonAction} />
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" name="password" placeholder="" type="password" class="input" onChange={buttonAction} />
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" name="re-enter" type="password" class="input" onChange={buttonAction} />
        {
        !check&&<span style={{color:"red"}}>incorrect password</span>|| <span>Confirm password</span>
         }
       
    </label>
    <button class="submit" onClick={submitCredentials}>Submit</button>
    <p class="signin">Already have an acount ? <Link to="/login">login</Link></p>
</form>
    </div>
   {/* <div>
   
    <img src="https://i.pinimg.com/564x/d8/5f/2e/d85f2e49bf6d1bce9f81fd7a0ee3fcb5.jpg" alt="signupImage" />
   </div> */}
    </div>
    </>)
}

export default Signup