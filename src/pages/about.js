import React from 'react'
import Layout from "../components/Layout"

function about() {
    return (
        <Layout>
            <div>
                <h1>About page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, atque consequatur consectetur pariatur molestias sapiente aut maxime cumque veniam ut? Ea repellendus ipsa est eveniet incidunt sint voluptatem praesentium atque.</p>
            </div>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default about