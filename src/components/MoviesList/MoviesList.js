import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieAction} from "../../redux/slices";
import css from './MoviesList.module.css'

const MoviesList = () => {
    const {idGenre} = useParams();

    const {movies, prev, next} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    let [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieAction.getMovies({page: query.get('page')}))
    }, [dispatch, query])

    let newMoviesList = [];
    if(idGenre){
        movies.map((value)=> {
            for (const valueElement of value.genre_ids) {
                if (valueElement == idGenre)
                {
                    newMoviesList.push(value)
                }
            }
        } )
    }

    const prevPage = () => {
        const page = +query.get('page') - 1;
        setQuery({page: `${page}`});
    };

    const nextPage = () => {
        const page = +query.get('page') + 1;
        setQuery({page: `${page}`});
    };

    return (
        <div className={css.MoviesList}>
            <div className={css.cards}>
                {
                  !idGenre && movies.map((movie, index) => <MoviesListCard key={index} movie={movie}/>)
                }
                {
                    idGenre && newMoviesList.map((movie, index) => <MoviesListCard key={index} movie={movie}/>)
                }
            </div>
            <div className={css.button}>
                <button disabled={!prev} onClick={prevPage} className={css.btn}>Prev</button>
                <button disabled={!next} onClick={nextPage} className={css.btn}>Next</button>
            </div>

        </div>
    );
};

export {MoviesList};