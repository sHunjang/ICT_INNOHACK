import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React from "react";

import "./CultureLocation.css";

import User from "../../assets/NearbyCulture/User.png";

export const CultureLocationPresenter = ({
    culture,

    userLocation,

    googleLoaded,
    handleScriptLoad,
    getIconSize
}) => {
    const containerStyle = {
        width: "350px",
        height: "450px",
    };

    const center = {
        lat : culture.lat,
        lng : culture.lng,
    };

    return(
        <div className="culture-location-container">
            <div className="culture-location-name">위치 : {culture.location}</div>
            <LoadScript
                googleMapsApiKey="AIzaSyCGIr7nBRTNada7X5-DPKNtxZ4rY-0YP8g"
                onLoad={handleScriptLoad}
            >
                <GoogleMap mapContainerStyle={containerStyle} zoom={14} center={center}>
                {
                    googleLoaded && (
                        <>
                            <MarkerF 
                                position={{ lat: culture.lat, lng: culture.lng }}
                            />
                            <MarkerF 
                                position={{ lat: userLocation.lat, lng: userLocation.lng }} 
                                icon={{
                                    url: User,
                                    scaledSize: getIconSize(),
                                }}
                            />
                        </>
                    )
                }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}