import React from "react";
import cls from "./delete.module.css";

export function Delete({ size, width, height }) {
    return (
        <svg
            className={cls.Delete}
            height={size || height || "48"}
            width={size || width || "48"}
            viewBox="0 -960 960 960">
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Z"
            />
        </svg>
    );
}
