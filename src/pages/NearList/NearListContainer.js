import React from "react";
import { NearListPresenter } from "./NearListPresenter";
import { useNavigate, useParams } from "react-router-dom";

import { cultureList } from "../../db/cultureDB";

const NearListContainer = () => {
    const { key, id } = useParams();

    const navigate = useNavigate();

    const filteredList = cultureList.filter(
        (item) => item.gu === key && item.key.toString() !== id
    );

    return(
        <NearListPresenter 
            filteredList = {filteredList}

            navigate = {navigate}
        />
    )
}

export default NearListContainer;