import { server } from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
    return (
        <div>
            <ArticleList articles={articles} />
        </div>
    )
}

// exporting async function `getStaticProps` causes Next.js
// to pre-render this page at build time using `props`
// returned from the function.
// See https://nextjs.org/docs/basic-features/pages#static-generation-with-data
// See https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()

    if (!articles) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            articles, // This will be passed to the page component as props.
        },
    }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
