import React from 'react'
import "./Sidebar.css";
import {Avatar} from "@material-ui/core";
function Sidebar () {

    const recentItem =(topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.bing.com/th?id=OIP.ryDnC1okuUJjkxcWzCdntQHaEK&w=215&h=108&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Sahil Singh</h2>
                <h4>sahilsingh2597@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewd you</p>
                    <p className="sidebar__statNumber">2,333</p>
                </div>
                <div className="sidebar__stat">
                    <p>views on post</p>
                    <p className="sidebar__statNumber">2,567</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("rectjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    );
}

export default Sidebar; 
