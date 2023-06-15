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
   <div>
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/courses" element={<Courses/>}></Route>
       <Route path="/leaderboard" element={<Leaderboard/>}></Route>
       <Route path="/coursedetails" element={<SingleCourse/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </div>
  )
}

export default Allroutes