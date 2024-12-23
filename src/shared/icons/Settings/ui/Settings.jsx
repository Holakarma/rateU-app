import React from "react";
import cls from "./settings.module.css";

export function Settings({ size, width, height }) {
    return (
        <svg
            className={cls.Settings}
            height={size || height || "48"}
            width={size || width || "48"}
            viewBox="0 -960 960 960">
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M424-116q-6 0-11-3.5t-6-10.5l-13-101q-20-6-46.5-20.5T304-282l-92 41q-6 3-12.5 1t-8.5-8l-58-102q-2-5-2-10t7-9l81-62q-1-11-2.5-24.5T215-481q0-10 1.5-23t2.5-28l-81-60q-6-4-6-9.5t3-11.5l57-98q2-4 8-6t12-1l89 39q20-16 45-30.5t47-21.5l14-101q1-6 6-9.5t11-3.5h112q6 0 11 3.5t6 9.5l13 102q25 9 47 22t42 29l94-39q6-2 12 .5t9 6.5l57 99q2 6 1.5 11.5T822-592l-86 63q3 14 4.5 26.5T742-480q0 9-2 21.5t-3 27.5l82 62q6 3 7 8.5t-1 11.5l-56 100q-3 6-10 8t-12-1l-94-41q-21 18-43 31.5T567-232l-14 102q-1 7-6 10.5t-11 3.5H424Zm52-266q42 0 70.5-28.5T575-481q0-42-28.5-70.5T476-580q-41 0-70 28.5T377-481q0 42 29 70.5t70 28.5Z"
            />
        </svg>
    );
}
