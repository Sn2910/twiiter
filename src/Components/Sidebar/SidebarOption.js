import React from 'react'
import './Sidebar.css'
import { NavLink, useNavigate }  from 'react-router-dom'

function SidebarOption({ active, text, Icon }) {
    const navigate = useNavigate()
    return (
        <div 
        className={`sidebarOption ${active && 'sidebarOption--active'}` 
      }>
          
            <Icon />
            <h4>{text}</h4>
            
           
        </div>
    )
}

export default SidebarOption
