import React from "react";

import { Map } from "./components/Map/Map";

export const NearbyCulturePresenter = ({
    userLocation,

    cultureList,

    isPopupOpen,
    openPopup,
    closePopup,

    navigate
}) => {
    return(
        <div>
            <Map 
                userLocation = {userLocation}

                cultureList = {cultureList}

                isPopupOpen = {isPopupOpen}
                openPopup = {openPopup}
                closePopup = {closePopup}

                navigate = {navigate}
            />
        </div>
    )
}