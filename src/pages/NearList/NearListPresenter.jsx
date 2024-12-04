import React from "react";
import { NearBox } from "./components/NearBox/NearBox";

import "./NearList.css";

export const NearListPresenter = ({
    filteredList,

    navigate
}) => {
    return(
        <div className="nearlist-container">
            <NearBox
                filteredList = {filteredList}

                navigate = {navigate}
            />
        </div>
    )
}