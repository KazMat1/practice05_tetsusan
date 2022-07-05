import React from "react";

const SideBar = ({children}) => {
    return (
        <div className="p-4 lg:w-1/3 w-full">
            <div className="flex rounded-lg border-gray-200 p-8 flex-col bg-white shadow-sm text-center items-center">
                {children}
            </div>
        </div>
    );
};
export default SideBar;
