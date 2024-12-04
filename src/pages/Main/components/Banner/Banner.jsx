import React, { useEffect, useState } from "react";

import "./Banner.css";

import Banner1 from "../../../../assets/Main/Banner1.png";
import Banner2 from "../../../../assets/Main/Banner2.png";
import Banner3 from "../../../../assets/Main/Banner3.png";

export const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [Banner1, Banner2, Banner3]

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    
        return () => clearInterval(intervalId);
    }, [currentIndex, images.length, 3000]);

    return(
        <div className="banner-container">
            <img src={images[currentIndex]} alt={`slide${currentIndex}`} />
        </div>
    )
}