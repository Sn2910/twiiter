import React from "react";
import "./Newsfeed.css";
import { SparklesIcon } from "@heroicons/react/outline";
import Input from "../Input/Input";

function Newsfeed() {
  return (
    <div className="newsfeed-container">
      <div className="newsfeed-header">
        <h4>Home</h4>
        <div className="animation-hover" >
          <SparklesIcon className="header-icon" />
        </div>
      </div>
      <Input />
    </div>
  );
}

export default Newsfeed;
