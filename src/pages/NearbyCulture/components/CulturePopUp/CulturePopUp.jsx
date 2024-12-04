import React from "react";

import "./CulturePopUp.css";

import { PopUp } from "../../../../components/PopUp/PopUp";

export const CulturePopUp = ({
    isPopupOpen,
    closePopup,

    culture,

    navigate
}) => {
    return(
        <PopUp
            isOpen={isPopupOpen}
            onClose={closePopup}
        >
            <div className="culture-popup-container">
                <img
                    src={culture.src}
                    onClick={() => navigate(`/culture/detail/${culture.key}`)}
                />
                <div className="culture-popup-info">
                    <span className="culture-popup-title">{culture.name}</span>
                    <span className="culture-popup-location">{culture.location}</span>
                    <span className="culture-popup-explain">{culture.explain}</span> 
                </div>
            </div>
        </PopUp>
    )
}