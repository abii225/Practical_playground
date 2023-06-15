import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Allroutes from './AllRoutes/Allroutes';


function App() {
  return (
   <>

   <div style={{display:"flex",justifyContent:"space-between",boxShadow:" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",height:"100px"}}>
    <div className='logo'>
    <img style={{width:"50px",height:"50px",display:"block",marginTop:"20px"}} src="https://i.postimg.cc/VLDp7ZPF/Colorful-Infinite-Logo-Design-1.png"   alt="logo" />
    <h1>Skill Club</h1>
    </div>
    <Navbar/></div>
   <div style={{marginTop:"50px"}}>
   <Allroutes/>
   </div>


   </>
  );
}

export default App;
