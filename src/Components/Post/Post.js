import React from 'react'
import './Post.css'
import {Avatar} from "@mui/material"
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({ first_name,last_name , handle,verified,text,profile_picture, post_image}) {
   
  return (
    <div className='post'>
      <div className="user-avatar">
           <Avatar
                src={profile_picture}
                alt={first_name}
                
                />
      </div>
      <div className="post-body">
         <div className="post-header">
            <div className="post-headerText">
                <h3>{first_name}{last_name }{""}
                <span>
                 {verified && <VerifiedIcon classname ="post-verificitaion" />} {handle}
                </span>
                </h3>
                
            </div>
            <div className="post-headerDescription">
                <p>{text}</p>
            </div>
         </div>
         <img src={ post_image}/>
         <div className="post-footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
      </div>

      
    </div>
  )
}

export default Post
