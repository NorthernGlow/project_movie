import {axiosService} from "./axios.service";
import {urls} from "../constans";

const movieService = {
    getMovies: (page = 1) => axiosService.get(urls.movies + urls.apiKey, {params: {page}}),
    getMovieByID: (id) => axiosService.get(urls.movie + id + urls.apiKey),
    getGenres:()=>axiosService.get(urls.genres + urls.apiKey)
}

export {
    movieService
}