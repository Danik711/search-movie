import { AxiosError } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// back-end
import baseService from "../../../back-end/base-service";

// helpers
import { MovieType } from "../../../helpers/types";
import { textsInApp } from "../../../../assets/textInApps";
import { SEARCH_BY_NAME_REDUCER } from "../../reducer-names";
import { mapBackEndMovieToFrontEnd } from "../../../helpers/functions";

type MovieSearchResponseType = {
    ok: boolean;
    error_code: number;  
    description: MovieType[];
};

type MovieSearchBodyType = {
    searchVal: string;
};

const initialState: {
    error: string;
    isLoading: boolean;
    response: MovieSearchResponseType;
} = {
    error: "",
    response: {
        ok: false,
        error_code: 0,
        description: []
    },
    isLoading: false,
};

export const movieSearchApi = createAsyncThunk<MovieSearchResponseType, MovieSearchBodyType>(
    "movieSearch/slice",
    async ({ searchVal }, { rejectWithValue }) => {
        try {
            const res = await baseService.get("?q=" + searchVal);

            const parsedData = mapBackEndMovieToFrontEnd(res.data.description);

            return {
                ok: res.data.ok,
                description: parsedData,
                error_code: res.data.error_code,
            };
        } catch(error: any) {
            const parsedError = error as AxiosError;
            // @ts-ignore
            const message = parsedError.response.data.message;
            rejectWithValue(message ?? textsInApp["eng"].errorMessages.defaultBackendError);
            throw new Error(message ?? textsInApp["eng"].errorMessages.defaultBackendError);
        }
    }
);

export const movieSearchSlice = createSlice({
    name: SEARCH_BY_NAME_REDUCER,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(movieSearchApi.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(movieSearchApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.response = {
                ...action.payload
            };
        }),
        builder.addCase(movieSearchApi.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message ?? textsInApp["eng"].errorMessages.defaultBackendError;
        });
    },
});

export default movieSearchSlice.reducer;