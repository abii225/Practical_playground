import React from 'react'
import { useParams } from 'react-router-dom'
import "../Styles/Lecture.css"
const Lecture = () => {
   const {ytube}=useParams();
   
  return (<>
    <div id="ytube-lecture">
     
    {/* src="https://www.youtube.com/embed/bi5bfH_gVWE?autoplay=1&mute=0&controls=1&showinfo=0&rel=0"> */}
    <iframe width="100%" height="400px"
src={`https://www.youtube.com/embed/${ytube}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0`}>
</iframe>
   {/* add comments */}

   <div >
      
      </div>
 
  <div id="complete">   
<input type="checkbox" name="" id="complete-check" />
<label id="complete-label">Mark as completed</label> 
</div>

<div class="lecture-form">
  <div style={{marginTop:"20px"}}>
  <input class="lecture-input" placeholder="Type your text" required="" type="text"/>
  <span class="lecture-input-border"></span>
  </div>
  <button>
    Post
    <div class="arrow-wrapper">
        <div class="arrow"></div>

    </div>
</button>
</div>

 {/* view all questions */}
   
    </div>
    </> )
}

export default Lecture