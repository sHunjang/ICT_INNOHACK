import React, { useEffect, useState } from "react";
import { CultureLocationPresenter } from "./CultureLocationPresenter";
import { useParams } from "react-router-dom";

import { cultureList } from "../../db/cultureDB";

const CultureLocationContainer = () => {
    const { key } = useParams();

    const culture = cultureList.find(item => item.key === parseInt(key));

    const [userLocation, setUserLocation] = useState(
        {
            lat : null,
            lng : null
        }
    );
    const [error, setError] = useState(null);
    const [googleLoaded, setGoogleLoaded] = useState(false);

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

    const handleScriptLoad = () => {
        setGoogleLoaded(true);
    };

    const getIconSize = () => {
        if (googleLoaded) {
            return new window.google.maps.Size(28, 28);
        }
        return null;
    };

    return(
        <CultureLocationPresenter 
            culture = {culture}

            userLocation = {userLocation}

            googleLoaded= {googleLoaded}
            handleScriptLoad = {handleScriptLoad}
            getIconSize = {getIconSize}
        />
    )
}

export default CultureLocationContainer;