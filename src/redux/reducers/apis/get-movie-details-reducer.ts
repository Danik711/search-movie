import { AxiosError } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// back-end
import baseService from "../../../back-end/base-service";

// types
import { MovieFullDetails } from "../../../helpers/types";

// helpers
import { textsInApp } from "../../../../assets/textInApps";
import { GET_MOVIE_DETAILS_REDUCER } from "../../reducer-names";
import { mapBackEndMovieFullDetailsToFrontEnd } from "../../../helpers/functions";

type MovieSearchResponseType = {
    movieDetails: MovieFullDetails
};

type GetMovieDetialsBodyType = {
    imdb_id: string;
};

const initialState: {
    error: string;
    isLoading: boolean;
    response: {
        movieDetails: MovieFullDetails
    };
} = {
    error: "",
    response: {
        movieDetails: {
            name: "",
            image: "",
            keywords: "",
            description: "",
            review: {
                author: "",
                comment: ""
            },
            actors: [],
        }
    },
    isLoading: false,
};

export const getMovieDetialsApi = createAsyncThunk<MovieSearchResponseType, GetMovieDetialsBodyType>(
    "getMovieDetails/slice",
    async ({ imdb_id }, { rejectWithValue }) => {
        try {
            const res = await baseService.get("?tt=" + imdb_id);
            const data = res.data.short;
            const parsedData = mapBackEndMovieFullDetailsToFrontEnd(data);
            return {
                movieDetails: parsedData
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

export const getMovieDetailsSlice = createSlice({
    name: GET_MOVIE_DETAILS_REDUCER,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getMovieDetialsApi.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(getMovieDetialsApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.response = {
                ...action.payload
            };
        }),
        builder.addCase(getMovieDetialsApi.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message ?? textsInApp["eng"].errorMessages.defaultBackendError;
        });
    },
});

export default getMovieDetailsSlice.reducer;