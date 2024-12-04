import React from "react";

import "./MainList.css";

import CultureProperty from "../../../../assets/Main/CultureProperty.png";
import CultureLife from "../../../../assets/Main/CultureLife.png";



export const MainList = ({
    navigate,

}

) => {
    

    return(
        <div className="mainlist-container">
            <span className="mainlist-title">장르</span>
            <div className="mainlist-list">
                <button className="CultureProperty">
                    <img src={CultureProperty} alt="문화재 탐방" />
                    문화재 탐방
                </button>
                <button className="CultureLife">
                    <img src={CultureLife} alt="문화 생활" />
                    문화재 탐방
                </button>
            </div>
        </div>
    )
}