import React from "react";
import { MainPresenter } from "./MainPresenter";
import { useNavigate } from "react-router-dom";

const MainContainer = () => {
    const navigate = useNavigate();

    return(
        <MainPresenter 
            navigate = {navigate}
        />
    )
}

export default MainContainer;