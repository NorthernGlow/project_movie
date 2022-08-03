import React from 'react';
import {Outlet} from 'react-router-dom'

import {Header} from "../components";
import css from './MoviesPage.module.css'

const MoviesPage = () => {
    return (
        <div>
            <Header/>
            <div className={css.MoviesPage}>
                <Outlet/>
            </div>
        </div>
    );
};

export {MoviesPage};