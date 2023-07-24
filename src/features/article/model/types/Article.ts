export interface Comment {
    user: string,
    comment: string,
    review: string
}

export interface Article {
    id: number,
    title: string,
    popular: boolean,
    body: string,
    comments: Comment[]
}

export interface ArticleSchema {
    articles: Article[]
}
