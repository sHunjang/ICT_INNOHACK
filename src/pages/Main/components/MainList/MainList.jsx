import React from "react";

import "./MainList.css";

import Theater from "../../../../assets/Main/Theater.png";
import Art from "../../../../assets/Main/Art.png";
import Museum from "../../../../assets/Main/Museum.png";
import Musical from "../../../../assets/Main/Musical.png";
import Activity from "../../../../assets/Main/Activity.png";
import Festival from "../../../../assets/Main/Festival.png";
import { ListElement } from "../ListElement/ListElement";

export const MainList = () => {
    const lists = [
        {
            name : "연극",
            url : Theater
        },
        {
            name : "미술관",
            url : Art
        },
        {
            name : "박물관",
            url : Museum
        },
        {
            name : "뮤지컬",
            url : Musical
        },
        {
            name : "액티비티",
            url : Activity
        },
        {
            name : "축제",
            url : Festival
        },
    ]

    return(
        <div className="mainlist-container">
            <span className="mainlist-title">장르</span>
            <div className="mainlist-list">
                {
                    lists.map((list, index) => {
                        return(
                            <ListElement
                                list = {list}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}