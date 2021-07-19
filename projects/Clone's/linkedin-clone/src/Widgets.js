import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManuaRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticale = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManuaRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
              <h2>LinkedIn News</h2> 
              <InfoIcon /> 
            </div>
            {newsArticale("Project is done", "Top news- 9999 readers")}
            {newsArticale("Covid update", "Top news- 9009 readers")}
        </div>
        
    );
}

export default Widgets
