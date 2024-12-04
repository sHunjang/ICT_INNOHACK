import React from "react";

import "./ListElement.css";

import Next from "../../../../assets/Common/Next.png";

export const ListElement = ({
    culture,

    navigate
}) => {
    return(
        <div className="list-element-container">
            <img 
                src={culture.src}
            />
            <div className="list-element-info">
                <span className="list-element-name">{culture.name}</span>
                <span className="list-element-location">{culture.location}</span>
            </div>
            <img 
                src={Next}

                className="list-element-next"

                onClick={() => navigate(`/culture/detail/${culture.key}`)}
            />
        </div>
    )
}