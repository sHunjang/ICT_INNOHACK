import React from "react";
import { ListPresenter } from "./ListPresenter";
import { useNavigate, useParams } from "react-router-dom";

import {cultureList} from "../../db/cultureDB";

const ListContainer = () => {
    const { key } = useParams();
    const navigate = useNavigate();

    const filteredList = cultureList.filter((item) => item.category === key)

    console.log(key)

    return(
        <ListPresenter 
            keyValue = {key}

            filteredList = {filteredList}

            navigate = {navigate}
        />
    )
}

export default ListContainer;