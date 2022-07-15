import React from "react";
import {useState} from "react";


import "./Input.css";
function Input() {
    const [input,setInput] =useState("")
    const [selectedFile, setSelectedFile]=useState("")
  return (
    <div className="input">
        <form>
            <div className="user-input">
                    <img
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


        </form>
        
      
       
         
    </div>

      
    
  );
}

export default Input;
