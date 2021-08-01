import Meta from '../components/Meta'

const about = () => {
    return (
        <div>
            // Although Meta component with default props already included in Layout,
            // this instance of the component will overwrite it.
            <Meta title='About' />
            <h1>About</h1>
        </div>
    )
}

export default about
