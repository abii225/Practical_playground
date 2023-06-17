import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../Styles/Courses.css"
const Courses = () => {
const size=new Array(4).fill(0);
   const [loading,setLoading]=useState(false);
   const [data,setData]=useState(``);
  const fetchCourses=async ()=>{
             try{
              setLoading(true);
                 let response=await fetch(`https://skillclubserverdata.onrender.com/courses`);
                 let data=await response.json();
                 setData(data);
                 setLoading(false);
                 console.log(data);
             }catch(err){
              console.log(err);
             }
  }
   useEffect(()=>{
      fetchCourses();
   },[])
  return (
     <>
    <div>
     <div class="search">
  <div class="search-box">
    <div class="search-field">
      <input placeholder="Search..." class="input" type="text"/>
      <div class="search-box-icon">
        <button class="btn-icon-content" style={{color:"none"}}>
          <i class="search-icon">
            <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#fff"></path></svg>
          </i>
        </button>
      </div>
    </div>
  </div>
</div>


{/* category */}
{
    loading&&
    <div class="loader">
    <span class="loader-text">Loading...</span>
    </div>
   }
 {/* courselist */}

 <div className='courselist'>

     {
      data!==""&&data.map((ele)=>(
        <div class="plan-card">
    <h1>{ele.name}</h1>
    <div class="etiquet-price">
        <p>Rating:{ele.rating}</p>
        <img style={{width:"20%"}} src={ele.image} alt="imageLogo" />
    </div>
    <div class="benefits-list">
        <ul>
          {
            ele.lessons.map((e)=>(
              <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
          </svg><span>{e.title}</span></li>
    
            ))
          }
          
        </ul>
    </div>
    <div class="button-get-plan">
        <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-rocket">
                <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"></path>
            </svg>
            <Link to={`/coursedetails/${ele.name}`}>Enroll Now</Link>
        </a>
    </div>
</div>
      ))
     }
 </div>






{/* //main div till here */}
    </div>
    </> )
}

export default Courses