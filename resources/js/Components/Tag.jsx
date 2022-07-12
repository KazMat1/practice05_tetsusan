import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Tag = ({ tag }) => {
    return (
        // ver.1
        // <p className="mr-2 text-xs inline-flex items-center font-normal py-1 px-1 bg-green-200 text-green-700">{`#${tag.name}`}</p>
        // ver.2 リンク色→#3EA6FF
        <Link className="mr-1 text-xs inline-flex items-center font-bold text-blue-500">{`#${tag.name}`}</Link>
    );
}

export default Tag;
