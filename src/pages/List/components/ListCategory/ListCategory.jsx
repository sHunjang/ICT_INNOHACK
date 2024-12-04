import React, { useState } from "react";
import "./ListCategory.css";

const categories = ["연극", "뮤지컬", "미술관", "박물관", "축제", "액티비티"];

export const ListCategory = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        // TODO: 여기서 선택된 카테고리에 따라 데이터를 로드하는 로직 추가
    };

    return (
        <div className="listcategory-container">
            {categories.map((category, index) => (
                <button
                    key={index}
                    className={`category-item ${category === activeCategory ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};
