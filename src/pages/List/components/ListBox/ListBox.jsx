import React from "react";
import { ListElement } from "../ListElement/ListElement";
import { ListCategory } from "../ListCategory/ListCategory";

export const ListBox = ({
    filteredList,

    navigate,
    keyValue
}) => {
    return(
        <div className="listbox-container">
            <ListCategory 
                keyValue={keyValue}

                navigate = {navigate}
            />
            {
                filteredList.map((culture) => {
                    return(
                        <ListElement 
                            culture = {culture}

                            navigate = {navigate}
                        />
                    )
                })
            }
        </div>
    )
}