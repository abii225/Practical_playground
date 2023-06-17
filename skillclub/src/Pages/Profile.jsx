import React from 'react'
import "../Styles/Profile.css"
import { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthContextProvider'

const Profile = () => {
    const {signinData}=useContext(AuthContext);
    console.log(signinData);
  return (
    <>
    <div>Profile</div>
    <div class="container">
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://picsum.photos/130/130?image=1027"/>
        </div>
        <div class="team-content">
          <h3 class="name">Username: {signinData.user}</h3>
          <h4 class="title">Email-id:{signinData.email}</h4>
        </div>
        <ul class="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</> )
}

export default Profile