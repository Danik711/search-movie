import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// helpers
import { MOVIES_REDUCER } from "../reducer-names";
import { MovieType } from "../../helpers/types";

const initialState: {
    reduxMovies: MovieType[]
} = {
    reduxMovies: []
};

export const moviesSlice = createSlice({
    name: MOVIES_REDUCER,
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<MovieType[]>) => {
            state.reduxMovies = [...action.payload];
        },
        default: (state) => state
    }
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;

