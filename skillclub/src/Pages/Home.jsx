import React from 'react'
import "../Styles/Home.css"
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Home = () => {

  const toLogin=(e)=>{
     console.log(e);
     <Navigate to="/login"/>
  }
  
  return (<>
{/* <iframe width="420" height="315"
src="https://www.youtube.com/embed/bi5bfH_gVWE?autoplay=1&mute=0&controls=1&showinfo=0&rel=0">
</iframe> */}

    <div className='homepage' id="home">
  
     <div className='loginsign'>
      <p className='homepageIntro'>At SkillClub, we believe that learning is a lifelong journey, and we are here to support you every step of the way. Whether you're a student, a professional seeking new skills, or simply curious about the world around you, we offer a diverse range of resources and courses to help you expand your knowledge and reach your full potential.</p>
      <button className='Homepagebutton' onClick={toLogin}>
      <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <span class="circle5"></span>
    <span class="text">
      <Link to="/signup"> Get Started</Link>
     </span>
        </button>
      <button className='Homebutton' style={{marginTop:"20px"}}>
        <Link to="/login">Already have an account</Link>
        </button>
     </div>
     <img  id="banner"src="https://i.pinimg.com/564x/4a/d9/25/4ad925d4909f71b5be7449dfab752989.jpg"  alt="homepage" />
      </div>
      </> )
}

export default Home