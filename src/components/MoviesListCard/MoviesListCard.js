import React from 'react';
import {useNavigate} from 'react-router-dom'

import css from './MoviesListCard.module.css'

const MoviesListCard = ({movie}) => {
    const {backdrop_path, title, vote_average} = movie;
    const navigate = useNavigate();
    const onMouseOver = (event)=>{
        const target = event.target;
        target.style.weight = '300px';
    };

    const onClick = () => {
        navigate('/fullInformationAboutFilm')
    };

    return (
        <div className={css.card} onMouseOver={onMouseOver} onClick={onClick}>
            <img src={`http://image.tmdb.org/t/p/w342/${backdrop_path}`} alt="poster" className={css.img}/>
            <h4>{title}</h4>
            <div>Avarage: {vote_average}</div>
        </div>
    );
};

export {MoviesListCard};