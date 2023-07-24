import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {AppState} from "@/store/config/store";
import {loginByUserName} from "@/features/auth/model/services/loginByUserName";
import {AuthSchema} from "@/features/auth/model/types/AuthSchema";

const initialState: AuthSchema = {
    authState: false,
    username: '',
    password: '',
    error: '',

};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUsername: (state: AuthSchema, action) => {
            state.username = action.payload;
        },
        setPassword: (state: AuthSchema, action) => {
            state.password = action.payload;
        },
        setAuthState(state, action) {
            state.authState = action.payload;
        },
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        },
        [loginByUserName.rejected.type]: (state, action) => {
            state.error = 'error';
        },
        [loginByUserName.fulfilled.type]: (state, action) => {
            state.authState = true;
        },
    },
});

export const {setUsername, setPassword, setAuthState} = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;
export const selectAuth = (state: AppState) => state.auth;

export default authSlice.reducer;
