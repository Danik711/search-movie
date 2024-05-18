import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// reducers
import moviesReducer from "./reducers/movies-reducer";

// helpers
import { MOVIES_REDUCER } from "./reducer-names";

export const store = configureStore({
    reducer: {
        [MOVIES_REDUCER]: moviesReducer
    }
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;