import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Genre.module.css'

const Genre = ({genre}) => {
    const {name,id:idGenre} = genre;
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`${idGenre.toString()}`)
    };

    const onMouseOver = (event) => {
        const target = event.target;
        target.style.color = '#2fe8a7';
    };

    const onMouseOut = (event) => {
        const target = event.target;
        target.style.color = '#f0fff0';
    };

    return (
        <div onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <li className={css.liName}>{name}</li>
        </div>
    );
};

export {Genre};