import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// reducers
import moviesReducer from "./reducers/movies-reducer";
// import searchByNameReducer from "./reducers/apis/search-by-name-reducer";
// import getMovieDetailsReducer from "./reducers/apis/get-movie-details-reducer";

// my package
import { movieSearchSlice, getMovieDetailsSlice } from "api-reducers";

// helpers
import { GET_MOVIE_DETAILS_REDUCER, MOVIES_REDUCER, SEARCH_BY_NAME_REDUCER } from "./reducer-names";

export const store = configureStore({
    reducer: {
        [MOVIES_REDUCER]: moviesReducer,
        
        // apis
        // [SEARCH_BY_NAME_REDUCER]: searchByNameReducer,
        // [GET_MOVIE_DETAILS_REDUCER]: getMovieDetailsReducer
        [SEARCH_BY_NAME_REDUCER]: movieSearchSlice.reducer,
        [GET_MOVIE_DETAILS_REDUCER]: getMovieDetailsSlice.reducer
    }
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;