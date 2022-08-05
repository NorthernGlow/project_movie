import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    movie:[],
    genres: [],
    errors: null,
    prev: null,
    next: null
};

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies(page);
            return data
        } catch (e) {
            rejectWithValue(e.response.data)
        }

    }
);

const getMovieByID = createAsyncThunk(
    'movieSlice/getMovieByID',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieByID(id);
            return data

        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenres();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

let movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.prev = action.payload.page - 1;
                state.next = action.payload.page + 1;
            })
            .addCase(getMovieByID.fulfilled, (state, action) => {
                state.movie = action.payload
            })
            .addCase(getGenres.fulfilled,(state, action) => {
                state.genres = action.payload.genres;
            })
            .addDefaultCase((state, action) => {
                let [type] = action.type.split('/').splice(-1);

                if (type === 'rejected') {
                    state.errors = action.payload
                } else {
                    state.errors = null
                }
            })
    }
});

let {reducer: movieReducer} = movieSlice;

const movieAction = {
    getMovies,
    getMovieByID,
    getGenres
}

export {
    movieReducer,
    movieAction
}