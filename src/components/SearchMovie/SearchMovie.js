import React from 'react';
import {useForm} from "react-hook-form";

import css from './SearchMovie.module.css'

const SearchMovie = () => {
    let {register,handleSubmit} = useForm();

    const submit = () => {

    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'Search'} {...register('movieName')} className={css.search}/>
                <button className={css.btn}>Search</button>
            </form>

        </div>
    );
};

export {SearchMovie};