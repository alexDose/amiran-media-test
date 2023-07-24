import { createSlice } from "@reduxjs/toolkit";
import {UserSchema} from "../types/user";
import {authSlice} from "@/features/auth/model/slice/authSlice";

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        },
    }
)

export default authSlice.reducer;
