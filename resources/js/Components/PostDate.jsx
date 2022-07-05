import React from "react";
import dateToFormat from "@/Utils";

const PostDate = ({ date }) => {
    return (
        <p className="mt-3 text-gray-400 inline-flex items-center">
            {dateToFormat(date)}
        </p>
    );
};

export default PostDate;
