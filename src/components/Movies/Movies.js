import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux/slices";
import {Movie} from "../Movie/Movie";

const Movies = () => {
    const {id} = useParams();
    const {movie} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getMovieByID({id}));
    }, [dispatch, id])

    return (
        <div>
            <Movie movie={movie}/>
        </div>
    );
};

export {Movies};