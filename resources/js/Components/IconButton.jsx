import React from "react";

const IconButton = ({ children, className, onClick }) => {
    return (
        <button
            className={
                `px-1 py-1 ml-1 rounded + ${className}`
            }
            onClick={onClick}
        >
            {/* icon svg */}
            {children}
        </button>
    );
}

export default IconButton;
