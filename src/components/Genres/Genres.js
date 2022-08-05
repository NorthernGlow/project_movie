import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux/slices";
import {Genre} from "../Genre/Genre";
import css from './Genres.module.css'

const Genres = () => {
    const {genres} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getGenres())
    }, [])

    return (
        <div>
            <ul className={css.li}>
            {
                genres.map((genre, index) => <Genre key={index} genre={genre}/>)
            }
            </ul>
        </div>
    );
};

export {Genres};