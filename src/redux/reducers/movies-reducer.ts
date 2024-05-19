import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// helpers
import { MOVIES_REDUCER } from "../reducer-names";

// types
import { MovieFullDetails, MovieType } from "../../helpers/types";

const initialState: {
    movieSeachData: string;
    reduxMovies: MovieType[];
    selectedMovie: MovieFullDetails;
} = {
    reduxMovies: [],
    movieSeachData: "",
    selectedMovie: {
        name: "",
        image: "",
        actors: [],
        review: {
            author: "",
            comment: ""
        },
        keywords: "",
        description: "",
    },
};

export const moviesSlice = createSlice({
    name: MOVIES_REDUCER,
    initialState,
    reducers: {
        setMovieSearch: (state, action:PayloadAction<string>) => {
            state.movieSeachData = action.payload;
        },
        setMovies: (state, action: PayloadAction<MovieType[]>) => {
            state.reduxMovies = [...action.payload];
        },
        selectMovie: (state, action: PayloadAction<MovieFullDetails>) => {
            state.selectedMovie = {
                ...action.payload
            };
        },
        default: (state) => state
    }
});

export const { setMovies, selectMovie, setMovieSearch } = moviesSlice.actions;
export default moviesSlice.reducer;

