import React from 'react';
import cls from './arrowDropDown.module.css';

export function ArrowDropDown({ size, width, height, active }) {
    return (
        <svg
            className={`${cls.ArrowDropDown} ${
                active ? cls['ArrowDropDown--active'] : ''
            }`}
            height={size || height || '48'}
            width={size || width || '48'}
            viewBox="0 -960 960 960"
        >
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M480-381.847 277.848-581.999h404.304L480-381.847Z"
            />
        </svg>
    );
}
