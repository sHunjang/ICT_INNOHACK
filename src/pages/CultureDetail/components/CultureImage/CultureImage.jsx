import React from "react";

import "./CultureImage.css";

export const CultureImage = ({
    culture
}) => {
    return(
        <div className="culture-image-container">
            <img 
                src={culture.src}

                className="culture-image-image"
            />
        </div>
    )
}