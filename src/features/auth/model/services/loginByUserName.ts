import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User} from "@/entities/User";

interface Props {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<User, Props>('login/loginByUserName', async ({username, password}, {rejectWithValue}) => {
    try {
        const response = await axios.post<User>('http://localhost:8000/login', {
            username, password
        })
        return response.data
    } catch (e) {
        console.log(e)
        return rejectWithValue('error');
    }
})
