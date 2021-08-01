import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

// Article preview card with link to the actual article page.
const ArticleItem = ({ article }) => {
    return (
        <Link href={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}

export default ArticleItem
