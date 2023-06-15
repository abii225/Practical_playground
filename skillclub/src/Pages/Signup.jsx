import React from 'react'
import "../Styles/Signup.css"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
  <>
  <div id="signupMain">
    <div>
      <form class="form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" class="input"/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Already have an acount ? <Link to="/login">login</Link></p>
</form>
    </div>
   <div>
    <img src="https://i.pinimg.com/564x/d8/5f/2e/d85f2e49bf6d1bce9f81fd7a0ee3fcb5.jpg" alt="signupImage" />
   </div>
    </div>
    </>)
}

export default Signup