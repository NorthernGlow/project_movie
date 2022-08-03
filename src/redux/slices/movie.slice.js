import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    prev: null,
    next: null
};

let getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            rejectWithValue(e.response.data)
        }

    }
);

let movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.prev = action.payload.page - 1;
                state.next = action.payload.page + 1;
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
    getAll
}

export {
    movieReducer,
    movieAction
}