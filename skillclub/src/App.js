import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Allroutes from './AllRoutes/Allroutes';


function App() {
  return (
   <>
   
   <div style={{display:"flex",justifyContent:"space-between",boxShadow:" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}>
    <div className='logo'>
    <img style={{width:"80px",height:"100px",display:"block"}} src="https://i.postimg.cc/4N6GDq7C/Colorful-Infinite-Logo-Design-1.png"   alt="logo" />
    <h1>Skill Club</h1>
    </div>
    <Navbar/></div>
   <div style={{marginTop:"100px"}}>
   <Allroutes/>
   </div>

 
   </>
  );
}

export default App;
