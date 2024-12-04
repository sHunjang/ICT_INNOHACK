import React from "react";

import "./List.css";


import { ListItem } from "../List/components/ListItem/ListItem";
import { BottomNav } from "../../components/BottomNav/BottomNav";


export const ListPresenter = () => {
    return(
        <div className="list-container">
            
            <ListItem />
            <BottomNav />
        </div>
    )
}