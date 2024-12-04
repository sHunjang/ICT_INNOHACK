import React from "react";

import { Map } from "./components/Map/Map";

export const NearbyCulturePresenter = ({
    userLocation,

    cultureList,

    isPopupOpen,
    openPopup,
    closePopup
}) => {
    return(
        <div>
            <Map 
                userLocation = {userLocation}

                cultureList = {cultureList}

                isPopupOpen = {isPopupOpen}
                openPopup = {openPopup}
                closePopup = {closePopup}
            />
        </div>
    )
}