import React from "react";

import "./BottomNav.css"

import Alarm from "../../assets/Common/Alarm.png";
import Home from "../../assets/Common/Home.png";
import List from "../../assets/Common/List.png";
import Profile from "../../assets/Common/Profile.png";
import Search_Bottom from "../../assets/Common/Search_Bottom.png"; 

export const BottomNav = ({
    children
}) => {
    return(
        <div className="bottomnav-container">
            {children}
            <img 
                src={List}
            />
            <img 
                src={Search_Bottom}
            />
            <img 
                src={Home}
            />
            <img 
                src={Alarm}
            />
            <img 
                src={Profile}
            />
        </div>
    )
}