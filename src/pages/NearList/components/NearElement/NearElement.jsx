import React from "react";

import "./NearElement.css";

import Next from "../../../../assets/Common/Next.png";

export const NearElement = ({
    culture,

    navigate
}) => {
    return(
        <div className="near-element-container">
            <img 
                src={culture.src}
            />
            <div className="near-element-info">
                <span className="near-element-name">{culture.name}</span>
                <span className="near-element-location">{culture.location}</span>
            </div>
            <img 
                src={Next}

                className="near-element-next"

                onClick={() => navigate(`/culture/detail/${culture.key}`)}
            />
        </div>
    )
}