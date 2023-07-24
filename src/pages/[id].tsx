import {useRouter} from 'next/router';
import styles from '../features/article/ui/Article.module.scss'
import {selectArticles} from "@/features/article/model/slice/articleSlice";
import {useSelector} from "react-redux";


const Article = () => {
    const router = useRouter();
    const {id} = router.query;

    const articles = useSelector(selectArticles)
    const article = articles.filter(article => article.id === +id)

    return <div className={styles.main}>
        <div>
            <h1>{article[0].title}</h1>
            <p>{article[0].categories}</p>
        </div>
        <p>{article[0].body}</p>
        <div className={styles.container}>
            {article[0].comments.map(item => <div key={item.user} className={styles.content}>
                <span>{item.user}</span>
                <div className={styles.description}>
                    <span style={{display: 'flex', gap: '5px'}}>
                        <h4>Comment:</h4>
                        {item.comment}
                    </span>
                    <span style={{display: 'flex', gap: '5px'}}>
                        <h4>Review:</h4>
                        {item.review}
                    </span>
                </div>
            </div>)}
        </div>
    </div>
}

export default Article;
