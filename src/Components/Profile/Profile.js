
import React from 'react'
import Advertise from '../Advertise/Advertise'
import Sidebar from '../Sidebar/Sidebar'
import { useState, useEffect } from 'react'



const url = "https://apiminitwitter.herokuapp.com/users/profile/me" 


function Profile() {
  const[user, setUser] = useState([])
  const fetchInfo = async () => {  
    const response = await fetch(url)
    const user = await response.json()
    console.log(user)
    setUser(user)
  }
 
useEffect(() => {
  fetchInfo()
}, [])
console.log(user)
  if(!user.length){
    return "Loading..."
  }
  return (
     
 
    <div >

        
       
    <div className="user-profile">
         <div className="user-profile-header">
          
            <h1>User Profile:</h1>
            <h4>Name: {user[0].first_name} {user[0].last_name}</h4>
            <img src={user[0].profile_picture} />
            <h4>Bio: {user[0].bio}</h4>
            <h4>Following: {user[0].following}</h4> 
            <h4>Followers: {user[0].followers}</h4> 
        </div>
<div className="user-back-img">
   {/*  <img className='user-bg' src="https://upload.wikimedia.org/wikipedia/commons/8/8a/MARQUES_BROWNLEE_Profile_Picture.jpg" alt="" /> */}
     
           <div className="user-profile-img">
{/*                 <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/MARQUES_BROWNLEE_Profile_Picture.jpg" alt="" /> */}
            
           </div>  
           
</div>  

    </div> 

       

    </div>
  )
}

export default Profile
