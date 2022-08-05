import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Menu.module.css'

const Menu = () => {
    const navigate = useNavigate();

    const onClickGenre = () => {
        navigate('/genres')
    };

    const onMouseOver = (event) => {
        const target = event.target;
        target.style.color = '#660033';
        target.style.fontSize = '25px';
    };

    const onMouseOut = (event) => {
        const target = event.target;
        target.style.color = 'rgba(5, 5, 5, 0.34)';
        target.style.fontSize = '20px';
    };

    const onClickHome = () => {
        navigate('/films')
    };

    return (
        <div className={css.allMenu}>
            <div className={css.Menu} onClick={onClickGenre} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                <b>Genres</b>
            </div>
            <div className={css.Menu} onClick={onClickHome} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                <b>Home</b>
            </div>
        </div>

    );
};

export {Menu};