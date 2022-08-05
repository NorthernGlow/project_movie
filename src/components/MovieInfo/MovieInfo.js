import React from 'react';

import css from "./MovieInfo.module.css";

const MovieInfo = ({movie}) => {
    const {
        title,
        status,
        release_date,
        spoken_languages,
        budget,
        genres,
        runtime,
        production_countries,
        revenue,
        production_companies,
        vote_average
    } = movie;
    return (
        <div className={css.info}>
            <h1>{title}</h1>

            <div className={css.info_large}>
                <div>Status: {status}</div>
                <div>Release date: {release_date}</div>
                <br/>

                <div>Genre: {
                    genres?.map(value=>value.name + ' ')
                }</div>
                <div>Runtime: {runtime} min</div>
                <br/>

                <div>Country: {production_countries?.map(value=>value.name)}</div>
                <div>Language: {spoken_languages?.map(value=>value.name + ' ')}</div>
                <br/>

                <div>Budget: {budget}$</div>
                <div>Revenue: {revenue}$</div>
                <br/>

                <div>Productions: {production_companies?.map(value=>value.name + ' ; ')}</div>
                <div>Avarage: {vote_average}</div>
            </div>
        </div>
    );
};

export {MovieInfo};