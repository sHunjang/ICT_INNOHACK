import React, { useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

import "./Map.css";
import User from "../../../../assets/NearbyCulture/User.png";
import Culture from "../../../../assets/NearbyCulture/Culture_Category.png";
import Art from "../../../../assets/NearbyCulture/Art_Category.png";
import { CulturePopUp } from "../CulturePopUp/CulturePopUp";

export const Map = ({
    userLocation,
    cultureList,

    navigate
}) => {
    const containerStyle = {
        width: "350px",
        height: "450px",
    };

    const center = {
        lat: userLocation.lat,
        lng: userLocation.lng,
    };

    const [googleLoaded, setGoogleLoaded] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedCulture, setSelectedCulture] = useState(null); // 클릭된 문화재 데이터 상태

    const handleScriptLoad = () => {
        setGoogleLoaded(true);
    };

    const getIconSize = () => {
        if (googleLoaded) {
            return new window.google.maps.Size(28, 28);
        }
        return null;
    };

    const openPopup = (culture) => {
        setSelectedCulture(culture); // 선택된 문화재 데이터 저장
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
        setSelectedCulture(null); // 팝업 닫을 때 선택 데이터 초기화
    };

    return (
        <div className="map-container">
            <LoadScript
                googleMapsApiKey="AIzaSyCGIr7nBRTNada7X5-DPKNtxZ4rY-0YP8g"
                onLoad={handleScriptLoad}
            >
                <GoogleMap mapContainerStyle={containerStyle} zoom={14} center={center}>
                    {googleLoaded && (
                        <MarkerF
                            position={{
                                lat: userLocation.lat,
                                lng: userLocation.lng,
                            }}
                            icon={{
                                url: User,
                                scaledSize: getIconSize(),
                            }}
                        />
                    )}
                    {
                        cultureList.map((culture, index) => (
                            (
                                culture.category == "문화"
                                ?
                                <MarkerF
                                    key={index}
                                    position={{
                                        lat: culture.lat,
                                        lng: culture.lng,
                                    }}
                                    icon={{
                                        url: Culture,
                                        scaledSize: getIconSize(),
                                    }}
                                    onClick={() => openPopup(culture)} // 선택된 문화재 데이터 전달
                                />
                                :
                                <MarkerF
                                    key={index}
                                    position={{
                                        lat: culture.lat,
                                        lng: culture.lng,
                                    }}
                                    icon={{
                                        url: Art,
                                        scaledSize: getIconSize(),
                                    }}
                                    onClick={() => openPopup(culture)} // 선택된 문화재 데이터 전달
                                />
                            )
                        ))}
                </GoogleMap>
            </LoadScript>

            {isPopupOpen && selectedCulture && (
                <CulturePopUp
                    isPopupOpen={isPopupOpen}
                    closePopup={closePopup}
                    
                    culture={selectedCulture} // 선택된 문화재 데이터 전달

                    navigate = {navigate}
                />
            )}
        </div>
    );
};
