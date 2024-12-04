import React, { useState } from "react";

import "./TopNav.css";

import Logo from "../../assets/Common/Local Culture.png"
import Search from "../../assets/Common/Search_Top.png";

import { Input } from "../Input/Input";
import { useNavigate } from "react-router-dom";

export const TopNav = ({
    children
}) => {
    const navigate = useNavigate()

    const [isShow, setIsShow] = useState(false)

    const searchShow = async () => {
        setIsShow(!isShow)
    }


    return(
        <div className="topnav-container">
            <div className="topnav-wrap">
                <div className="topnav-image">
                    <img 
                        src = {Logo}

                        alt="Logo"
                        
                        onClick={() => navigate('/')}
                    />
                    <img 
                        src = {Search}

                        alt="Search"

                        onClick={searchShow}
                    />
                </div>
            </div>
            {
                isShow && (
                    <Input
                        placeholder={"여행 찾기"}

                        fontSize={"16px"}
                        height={"30px"}
                    />
                )
            }
            {children}
        </div>
    )
}