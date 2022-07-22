import React from "react";
import "./MessagePage.css";
import { useParams, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState, useEffect } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const url = "https://apiminitwitter.herokuapp.com/messages";
function MessagePage() {
  const { id } = useParams();
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch(`${url}/${id}`)
      .then((Response) => Response.json())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(message);
  return (
    <div>
      <div className="message_header">
        <Link to="/">
          <ArrowBackIcon /> back to home page
        </Link>
      </div>
      {/* Dedicated Post */}
      <div className="message_body">
        {message.text}
        <img src={message.post_image} />
      </div>
      <div>{message.createdAt}</div>
      <div className="post-footer">
        <ChatBubbleOutlineIcon fontSize="small" />
        <RepeatIcon fontSize="small" />
        <FavoriteBorderIcon fontSize="small" />

        <PublishIcon fontSize="small" />
      </div>
    </div>
  );
}

export default MessagePage;
