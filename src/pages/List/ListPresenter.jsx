import React from "react";

import "./List.css";
import { ListBox } from "./components/ListBox/ListBox";

export const ListPresenter = ({
    keyValue,
    navigate,

    filteredList
}) => {
    return(
        <div className="list-container">
            <ListBox
                keyValue = {keyValue}

                filteredList = {filteredList}

                navigate = {navigate}
            />
        </div>
    )
}