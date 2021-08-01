import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'

// Actual article page.
const article = ({ article }) => {
    // const router = useRouter()
    // const { id } = router.query

    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}

// In addition to pre-rendering page paths, for each page path
// we need to fetch the data and pre-render the actual page
// using the given article id in `context.params`.
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()

    if (!article) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            article,
        },
    }
}

// When your pages paths depend on external data:
// Pre-render pages paths at build time.
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    // These specific paths from the external data will
    // be pre-rendered at build time.
    // { fallback: false } means other routes should simply 404
    // rather than divert to a fallback pre-rendered page.
    return {
        paths,
        fallback: false,
    }
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default article
