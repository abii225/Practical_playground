import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Courses from '../Pages/Courses'
import Leaderboard from '../Pages/Leaderboard'
import SingleCourse from '../Pages/SingleCourse'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const Allroutes = () => {
  return (
   
    <Routes>
       <Route path="/" ele={<Home/>}></Route>
       <Route path="/courses" ele={<Courses/>}></Route>
       <Route path="/leaderboard" ele={<Leaderboard/>}></Route>
       <Route path="/coursedetails" ele={<SingleCourse/>}></Route>
       <Route path="/login" ele={<Login/>}></Route>
       <Route path="/signup" ele={<Signup/>}></Route>
    </Routes>
    
  )
}

export default Allroutes