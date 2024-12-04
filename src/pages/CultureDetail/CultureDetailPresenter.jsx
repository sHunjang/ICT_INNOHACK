import React from "react";

import "./CultureDetail.css"
import { CultureImage } from "./components/CultureImage/CultureImage";
import { CultureInfo } from "./components/CultureInfo/CultureInfo";

export const CultureDetailPresenter = ({
    culture,

    navigate
}) => {
    return(
        <div>
            <CultureImage 
                culture = {culture}
            />
            <CultureInfo 
                culture = {culture}

                navigate = {navigate}
            />
        </div>
    )
}