import {UserSchema} from "@/entities/User";
import {AuthSchema} from "@/features/auth/model/types/AuthSchema";
import {ArticleSchema} from "@/features/article/model/types/Article";

export interface StateSchema {
    user: UserSchema
    auth: AuthSchema
    article: ArticleSchema
}
