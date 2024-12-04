import React from "react";
import "./ListCategory.css";

export const ListCategory = ({
    keyValue, 
    
    navigate,
}) => {
    return (
        <div className="list-category-button">
            <button
                className={
                    keyValue === "문화"
                        ? "list-category-button-two"
                        : "list-category-button-one"
                }
                onClick={() => navigate("/culture/list/문화")}
            >
                문화재 탐방
            </button>
            <button
                className={
                    keyValue === "예술"
                        ? "list-category-button-two"
                        : "list-category-button-one"
                }
                onClick={() => navigate("/culture/list/예술")}
            >
                문화 생활
            </button>
        </div>
    );
};
