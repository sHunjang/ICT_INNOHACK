import React from "react";
import { useNavigate } from "react-router-dom";
import "./ListItem.css";

export const ListItem = ({ id, title, price, imageUrl, rating, reviews }) => {
    let navigate = useNavigate();

    const goToDetail = () => {
        navigate(`/details/${id}`);
    };

    return (
        <div className="listitem-container" onClick={goToDetail}>
            <img src={imageUrl} alt={title} className="item-image"/>
            <div className="item-title">{title}</div>
            <div className="item-price">{price}원</div>
            <div className="item-rating">
                <span className="stars">★ {rating} </span>
                <span className="reviews">({reviews} reviews)</span>
            </div>
        </div>
    );
};
