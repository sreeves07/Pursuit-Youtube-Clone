import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';




const Header = ({  handleUserSearch, handleUserTextChange, searchBox }) => {
    
    return (
        <div className="header">

            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img 
                    className="header__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' 
                    alt='logo' 
                    />
                </Link>
               
            </div>

                <form className="header__input"
                    onSubmit={handleUserSearch}>
                    <input
                        value={searchBox}
                        onChange={handleUserTextChange}
                        type="text" 
                        placeholder="Search" />
                    <button type="submit">
                        <SearchIcon className='header__inputButton'/>
                    </button>
                </form>
            

                

            <div className='header__icons'>
                <VideoCallIcon className='header_icon'/>
                <AppsIcon className='header_icon'/>
                <NotificationIcon className='header_icon'/>
                <Avatar
                className="profile__photo" src='https://www.flaticon.com/free-icon/profile_3135715'
                alt="profile icon"
                />
            </div>
        </div>
    );
};

export default Header;