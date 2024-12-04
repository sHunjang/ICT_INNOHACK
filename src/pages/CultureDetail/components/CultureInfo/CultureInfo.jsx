import React from "react";

import "./CultureInfo.css";

import Gps from "../../../../assets/CultureDetail/Gps.png";

import {Button} from "../../../../components/Button/Button";

export const CultureInfo = ({
    culture,

    navigate
}) => {
    return(
        <div className="culture-info-container">
            <div className="culture-info-top">
                <div>
                    <span className="culture-info-name">{culture.name}</span>
                    <img 
                        src={Gps}
                        className="culture-info-image"

                        onClick={() => navigate(`/culture/map/${culture.key}`)}
                    />
                </div>
                <span className="culture-info-keyward">#{culture.category} #{culture.gu}</span>
            </div>
            <div className="culture-info-explain">
                <span>{culture.explain}</span>
            </div>
            <div className="culture-info-etc">
                <div className="culture-info-etc-info">
                    <span className="culture-info-etc-text">위치 : {culture?.location}</span>
                    {
                        culture?.time
                        ?
                        <span className="culture-info-etc-text">운영시간 : {culture?.time}</span>
                        :
                        <></>
                    }
                </div>
            </div>
            <div className="culture-info-button">
                <Button 
                    title={"주변 문화 유산 찾기"}

                    width={"80%"}

                    onClick={() => navigate(`/culture/nearlist/${culture.gu}/${culture.key}`)}
                />
            </div>
        </div>
    )
}