import React from "react";

import "./Main.css";

import { Banner } from "./components/Banner/Banner";
import { Button } from "../../components/Button/Button";
import { MainList } from "./components/MainList/MainList";

export const MainPresenter = () => {
    return(
        <div className="main-container">
            <Banner />
            <Button 
                title={"주변 문화 유산 찾기"}

                width={"80%"}
                height={"80px"}
            />
            <MainList />
        </div>
    )
}