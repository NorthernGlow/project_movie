import React from 'react';

import {imageURL} from "../../constans";
import css from "./PosterPrevie.module.css";


const PosterPreview = ({poster_path}) => {
    return (
        <div>
            <img src={`${imageURL}${poster_path}`} alt="poster" className={css.img}/>
        </div>
    );
};

export {PosterPreview};