import React from "react";

import "./ListElement.css";

export const ListElement = ({
    list
}) => {
    return(
        <div className="listelement-container">
            <img 
                src={list.url}
                alt=""
            />
            <span className="listelement-name">{list.name}</span>
        </div>
    )
}