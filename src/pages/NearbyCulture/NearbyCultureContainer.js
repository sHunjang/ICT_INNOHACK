import React, { useEffect, useState } from "react";
import { NearbyCulturePresenter } from "./NearbyCulturePresenter";

import { cultureList } from "../../db/cultureDB";

const NearbyCultureContainer = () => {
    const [userLocation, setUserLocation] = useState(
        {
            lat : null,
            lng : null
        }
    );

    const [error, setError] = useState(null);

    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);

    useEffect(() => {
        (
            async () => {
                if(navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            setUserLocation({
                                lat : position.coords.latitude,
                                lng : position.coords.longitude,
                            });
                        },
                        (err) => setError(err.message),
                        {
                            enableHighAccuracy: true, // 높은 정확도 요구
                            timeout: 10000, // 최대 대기 시간 10초
                        }
                    );
                } else {
                    setError("Geolocation is not supported by this browser.");
                }
            }
        )()
    }, [])
    
    return(
        <NearbyCulturePresenter 
            userLocation = {userLocation}

            cultureList = {cultureList}

            isPopupOpen = {isPopupOpen}
            openPopup = {openPopup}
            closePopup = {closePopup}
        />
    )
}

export default NearbyCultureContainer;