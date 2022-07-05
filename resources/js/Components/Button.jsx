import React from 'react';

export default function Button({ type = 'submit', className = '', processing, children }) {
    return (
        <button
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-green-600 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
            // onClick={() => props.onClick(props.id)}
        >
            {children}
        </button>
    );
}
