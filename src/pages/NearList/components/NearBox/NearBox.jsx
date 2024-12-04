import React from "react";

import "./NearBox.css";
import { NearElement } from "../NearElement/NearElement";

export const NearBox = ({
    filteredList,

    navigate
}) => {
    return(
        <div className="nearbox-container">
            <span className="nearbox-title">주변의 문화유산</span>
            {
                filteredList.map((culture) => {
                    return(
                        <NearElement
                            culture = {culture}
                            
                            navigate = {navigate}
                        />
                    )
                })
            }
        </div>
    )
}