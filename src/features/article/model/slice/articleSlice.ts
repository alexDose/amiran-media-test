import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {ArticleSchema} from "@/features/article/model/types/Article";
import {AppState} from "@/store/config/store";

const initialState: ArticleSchema = {
    articles: [],
};

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        setArticles: (state: ArticleSchema, action) => {
            state.articles = action.payload;
        },
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.article,
            };
        },
    },
});

export const {setArticles} = articleSlice.actions;

export const selectArticles = (state: AppState) => state.article.articles;

export default articleSlice.reducer;
