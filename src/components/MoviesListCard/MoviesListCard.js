import React from 'react';
import {useNavigate} from 'react-router-dom'

import css from './MoviesListCard.module.css'
import {imageURL} from "../../constans";

const MoviesListCard = ({movie}) => {
    const {backdrop_path, title, vote_average} = movie;
    const navigate = useNavigate();

    const onMouseOver = (event) => {
        const target = event.target;
        target.style.width = '500px'
        target.style.height = '600px'
    }

    const onMouseOut = (event) => {
        const target = event.target;
        target.style.width = '400px'
        target.style.height = '500px'

    };

    const onClick = () => {
        navigate(`/${movie.id.toString()}`)
    };


    return (
        <div className={css.card} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}>
            <img src={`${imageURL}${backdrop_path}`} alt="poster" className={css.img}/>
            <h2 className={css.title}>{title}</h2>
            <div className={css.avar}>Avarage: {vote_average}</div>
        </div>
    );
};

export {MoviesListCard};