import { Button, Avatar } from "@mui/material";
import {XIcon, PhotographIcon,ChartBarIcon,EmojiHappyIcon,CalendarIcon} from "@heroicons/react/outline";
import React from "react";
import {useState, useRef} from "react";
import data from '@emoji-mart/data'

import { Picker } from 'emoji-mart'
import "./Input.css";
function Input() {
    const [input,setInput] =useState("")
    const [selectedFile, setSelectedFile]=useState(null)
    const [showEmojis, setShowEmojis] = useState(false);
    const filePickerRef =useRef(null)
    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
      };
    
    const addImageToPost =()=>{

    }
    const sendMessage =(e)=>{
        e.preventDefault()
    }
  return (
    <div className="input">
        <form>
            <div className="user-input">
                    <Avatar
                src="https://images.hindustantimes.com/img/2022/03/03/550x309/Sushmita_Sen_1646321196545_1646321210673.jpg"
                alt=""
                className="user-img"
                />
                <input
                    type= "text"
                    value = {input} 
                    
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder = "What's happening?"
                    />
                      
                
        

            </div>
            <input
                    type= "text"
                     className="use-imageinput"
                    placeholder = "Optional: Enter image Url"
                    />
                
            {selectedFile &&(
    <div className="input-footer">
        <div className="input-footer-content"onClick={()=> setSelectedFile(null)}>
        <XIcon className="x-icon" />
        </div>
        <img src={selectedFile} alt="" className="footer-img"/>
 
    </div>
             
         ) }
         <div className="footer-icon">
         <div className="icon-container">
        
                <div className="icon" onClick={()=>filePickerRef.current.click()}>
                    <PhotographIcon />
                    <input 
                    hidden
                    type="file" 
                    onChange={addImageToPost} 
                    ref = {filePickerRef}/>
                </div>
                <div className="icon">
                <ChartBarIcon  />
              </div>
        
              <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                <EmojiHappyIcon />
              </div>

              <div className="icon">
                <CalendarIcon />
              </div>

              {/* {showEmojis && (
                <Picker
                  onSelect={addEmoji}
                  style={{
                    position: "absolute",
                    marginTop: "200px",
                    marginLeft: -40,
                    maxWidth: "320px",
                    borderRadius: "20px",
                  }}
                  theme="dark"
                />
              )}  */}
              
            
            </div>
            <button 
            className="tweet-btn"
            type="submit"
            onClick={sendMessage}
            >Tweet</button>
         </div>
           
       
       


        </form>
      
         
       
    </div>


    
  );
}

export default Input;
