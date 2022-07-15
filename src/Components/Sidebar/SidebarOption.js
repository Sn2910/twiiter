import React from 'react'
import './Sidebar.css'

function SidebarOption({ text, Icon }) {
    return (
        <div className="sidebarOption">
            <Icon />
            <h4>{text}</h4>
        </div>
    )
}

export default SidebarOption
