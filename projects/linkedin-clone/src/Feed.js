import React from 'react'
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create"; 
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from './InputOption';
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button> 
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalenderViewDayIcon} title="Write articale" color="#7FC15E" />
                </div>
            </div>
            <Post name="Sahil Singh" description="This is my test" message="Wow This work" />
        </div>
    );
}

export default Feed;
