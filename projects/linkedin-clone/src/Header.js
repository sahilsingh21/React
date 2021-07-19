import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SupervisorAccounIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption';
import { auth } from './firebase';
import { logout } from "./features/userSlice";
import {useDispatch } from "react-redux";

function Header(){
   
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className='header'>

        <div className='header__left'>
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>

            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search" type="text"/>
            </div>
                
        </div>

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title ="Home"/>
            <HeaderOption Icon={SupervisorAccounIcon} title ="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title ="Jobs" />
            <HeaderOption Icon={ChatIcon} title ="Messaging" />
            <HeaderOption Icon={NotificationIcon} title ="Notifications" />
            <HeaderOption avatar={true} title="me"
            onClick={logoutOfApp}
            />
            
        </div>

        </div>
    )
}

export default Header