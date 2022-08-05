import {configureStore, combineReducers} from "@reduxjs/toolkit";

import {movieReducer} from "./slices";

let rootReduser = combineReducers({
    movies:movieReducer
});

const setupStore = () => configureStore({
    reducer: rootReduser
});

export {
    setupStore
}