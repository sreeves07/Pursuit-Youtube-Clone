import React from 'react';
import SideBarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubscriptionIcon from "@material-ui/icons/Subscriptions"

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import HistoryIcon from "@material-ui/icons/History"
import OndemandIcon from "@material-ui/icons/OndemandVideo"

import WatchLaterIcon from "@material-ui/icons/WatchLater"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAlt"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMore"

import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SideBarRow selected Icon={HomeIcon} title="Home" />
            <SideBarRow Icon={WhatshotIcon} title="Trending" />
            <SideBarRow Icon={SubscriptionIcon} title="Subscriptions" />
            <hr />

            <SideBarRow Icon={VideoLibraryIcon} title="Library" />
            <SideBarRow Icon={HistoryIcon} title="History" />
            <SideBarRow Icon={OndemandIcon} title="Your Videos" />
            <SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
            <hr />

        </div>
    );
};

export default Sidebar;