import React from 'react'
import './Advertise.css'

import { TwitterTimelineEmbed, 
  TwitterShareButton,
    TwitterTweetEmbed } from 'react-twitter-embed';
    import SearchIcon from '@mui/icons-material/Search';

function Advertise() {
  return (

    <div className="advertise">
    <div className="advertise-input">
      <SearchIcon className="advertise-searchIcon" />
      <input placeholder="Search Twitter" type="text" />
    </div>

    <div className="advertise-advertiseContainer">
      <h2>What's happening</h2>

      <TwitterTweetEmbed tweetId={"44196397"} />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{ height: 400 }}
      />

      <TwitterShareButton
        url={"https://www.facebook.com/sneha.shaw.750"}
        options={{ text: "#reactjs is awesome", via: "Sn2910" }}
      />
    </div>
  </div>
  )
    
}


export default Advertise
