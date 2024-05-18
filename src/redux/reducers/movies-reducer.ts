import { createSlice } from "@reduxjs/toolkit";

// helpers
import { MOVIES_REDUCER } from "../reducer-names";

const initialState = {

};

export const moviesSlice = createSlice({
    name: MOVIES_REDUCER,
    initialState,
    reducers: {
        default: (state) => state
    }
});

export const { } = moviesSlice.actions;
export default moviesSlice.reducer;

