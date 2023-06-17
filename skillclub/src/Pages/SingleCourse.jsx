import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/SingleCourse.css"


const SingleCourse = () => {

  const {name}=useParams();
  const [data,setData]=useState(null);
  const [lessons,setLessons]=useState(null);
           const courseFetch=async()=>{
                     try{
                       let res=await fetch(`https://skillclubserverdata.onrender.com/courses`);
                       let data=await res.json();
                      
                       data=data.filter((ele)=>{
                        return ele.name===name;
                       })
                     
                       setData(data);
                       console.log(data,name);
                       console.log(data[0].lessons);
                       setLessons(data[0].lessons);
                      
                     }catch(err){
                      console.log(err);
                     }
           }
          useEffect(()=>{
            courseFetch();
          },[])
          
          useEffect(()=>{
            console.log(lessons,"lectures")
            console.log(data);
          },[data,lessons])
          
  return (
    <div id="singleCourse">
    {
      data&&data.map((ele)=>(
        <div className='coursetitle'>
        <div>
          <h2>Title:{ele.name}</h2>
          <h2>Rating:{ele.rating}</h2>
          <h2>Total lectures:{ele.lessons.length}</h2>
        </div>
        <div className='courseimage'>
          <img src={ele.image} alt="logo" />
        </div>
      </div>
      ))
    }
   <div>
    <h1 style={{textDecoration:"underline",textAlign:"center"}}>Lectures</h1>
     {
      lessons&&lessons.map((lecture)=>(
              <div id="lecture">
                {/* <Link to={`/coursedetails/${lecture.src}`} className='titleoflecture'>{lecture.title}</Link> */}
                <h1><Link to={`/coursedetails/https://www.youtube.com/embed/${lecture.src}`} className='titleoflecture'>{lecture.title}</Link></h1>
              </div>
              
      ))
      }
   </div>
    </div>
  )
}

export default SingleCourse