import React, { useState } from "react";
import { CultureDetailPresenter } from "./CultureDetailPresenter";

import { cultureList } from "../../db/cultureDB";
import { useNavigate, useParams } from "react-router-dom";

const CultureDetailContainer = () => {
    const { key } = useParams();

    const navigate = useNavigate();

    const culture = cultureList.find(item => item.key === parseInt(key));

    return(
        <CultureDetailPresenter
            culture = {culture}

            navigate = {navigate}
        />
    )
}

export default CultureDetailContainer;