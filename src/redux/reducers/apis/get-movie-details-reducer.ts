import { AxiosError } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// back-end
import baseService from "./back-end/base-service";

// types
import { MovieFullDetails } from "./types";

// helpers
import { mapBackEndMovieFullDetailsToFrontEnd } from "./functions";

type MovieSearchResponseType = {
    movieDetails: MovieFullDetails
};

type GetMovieDetialsBodyType = {
    imdb_id: string;
};

const initialState: {
    isLoading: boolean;
    error: string | undefined;
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
            rejectWithValue(message ?? error.message);
            throw new Error(message ?? error.message);
        }
    }
);

export const getMovieDetailsSlice = createSlice({
    name: "movieDetails",
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
            state.error = action.error.message;
        });
    },
});

export default getMovieDetailsSlice.reducer;