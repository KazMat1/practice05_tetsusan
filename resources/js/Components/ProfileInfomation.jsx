import React from "react";

const ProfileInformation = (props) => {
    return (
        <div className="flex-grow">
            <h2 className="text-gray-900 text-xl title-font font-medium">
                {props.name}
            </h2>
            <p className="leading-relaxed text-base">
                {props.email}
            </p>
            <p className="leading-relaxed text-base mb-5">
                {`投稿:${props.countPost}件`}
            </p>
        </div>
    );
};

export default ProfileInformation;
