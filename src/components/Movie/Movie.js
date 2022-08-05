import css from './Movie.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";

const Movie = ({movie}) => {
    const {
        poster_path,
        overview
    } = movie;


    return (
        <div>
            <div className={css.movie}>
                <PosterPreview poster_path={poster_path}/>
                <MovieInfo movie={movie}/>
            </div>
            <div className={css.description}>
                <h2 className={css.descH}>Description</h2>
                <p className={css.overview}>{overview}</p>
            </div>
        </div>
    );
};

export {Movie};