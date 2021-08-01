import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

// List of article preview cards.
const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article) => (
                <ArticleItem article={article} />
            ))}
        </div>
    )
}

export default ArticleList
