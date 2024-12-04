import React from "react";

import "./PopUp.css"

export const PopUp = ({
    isOpen,
    onClose,
    
    children
}) => {
    if(!isOpen) return null // 팝업이 닫혀 있으면 렌더링 x

    return(
        <div className="popup-container" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close-btn" onClick={onClose}>
                    &times;
                    {/* x 기호 표시 */}
                </button>
                {children}
            </div>
        </div>
    )
}