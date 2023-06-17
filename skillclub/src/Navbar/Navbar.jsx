import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthContextProvider'


const Navbar = () => {

    const {login}=useContext(AuthContext);
    const routes=[
        {
            path:"/",
            title:"Home"
        },
        {
            path:"/courses",
            title:"Courses"
        },
        {
            path:"/leaderboard",
            title:"LeaderBoard"
        }
        // ,
        // {
        //     path:"/login",
        //     title:"Login"
        // }
    ]

  return (
    <>
    <div style={{width:"50%",
              display:"flex",
              justifyContent:"space-around",
              float:"right"}}>
        {
            routes.map((ele)=>(
                <Link to={ele.path}><h1 style={{outline:"none",fontSize:"30px"}}>{ele.title}</h1></Link>
            ))
        }
        {
            !login&&<Link to="/login"><h1 style={{outline:"none",fontSize:"30px"}}>Login</h1></Link>||<Link to="/profile"><h1 style={{outline:"none",fontSize:"30px"}}>Profile</h1></Link>
        }
    </div>
    </> )
}

export default Navbar