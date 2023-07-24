'use client';
import {useEffect, useState} from "react";
import SearchInput from "@/shared/ui/SearchInput/SearchInput";
import {Article} from '../model/types/Article'
import {useDispatch, useSelector} from "react-redux";
import {selectArticles, setArticles} from "@/features/article/model/slice/articleSlice";
import styles from './ArticlePage.module.scss'
import {useRouter} from "next/router";
import {Button} from "@/shared/ui/Button";

const Article = () => {
    const [searchValue, setSearchValue] = useState('');
    const [filter, setFilter] = useState<'all' | 'popular'>('all')

    const router = useRouter();

    const dispatch = useDispatch()
    const articles = useSelector(selectArticles)

    const getFilteredArticles = (articles: Article[]) => {
        return articles.filter((article) => article.title.toUpperCase().indexOf(searchValue.toUpperCase()) > -1);
    };

    const getPopularArticles = () => {
        setFilter('popular')
    }

    const getAllArticles = () => {
        setFilter('all')
    }

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:8000/articles')
            const data = await response.json()
            dispatch(setArticles(data))
        } catch(e) {
            console.log(e)
        }
    }

    const sortArticles = filter !== 'popular'
        ? articles
        : articles.filter(article => article.popular)


    useEffect(() => {
        getData()
    }, [])

    return <div className={styles.main}>
        <div className={styles.filters}>
            <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Button onClick={getPopularArticles}>
                Popular
            </Button>
            <Button onClick={getAllArticles}>
                All
            </Button>
        </div>
        <div className={styles.container}>
            {getFilteredArticles(sortArticles).map((article: any) => (
                <div
                    onClick={() => router.push(`/${article.id}`)}
                    className={`${styles.article} ${article.popular && styles.popular}`}
                    key={article.id}
                >
                    <span>{article.title}</span>
                    <span>Comments: {article.comments.length}</span>
                </div>
            ))}
        </div>
    </div>
}

export default Article
