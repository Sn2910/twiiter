import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import SignLanguageSharpIcon from '@mui/icons-material/SignLanguageSharp'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SearchIcon from '@mui/icons-material/Search'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Icon */}
            <SignLanguageSharpIcon />
            {/* SidebarOption*/}
            <SidebarOption Icon={HomeOutlinedIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption
                Icon={NotificationsNoneOutlinedIcon}
                text="Notifications"
            />
            <SidebarOption Icon={MailOutlineOutlinedIcon} text="Messages" />
            <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            {/* Button--Clap */}
        </div>
    )
}

export default Sidebar
