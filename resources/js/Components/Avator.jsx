import React from "react";

const Avator = () => {
    return (
        <div className="w-20 h-20 sm:mb-3 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-8 h-8"
                viewBox="0 0 24 24"
            >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
        </div>
    );
};

export default Avator;
