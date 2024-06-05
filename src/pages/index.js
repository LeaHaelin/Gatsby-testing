import * as React from "react"
import * as  styles from '../styles/home.module.css'

import Layout from "../components/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className={styles.header}>
      <h2>Gatsby project</h2>
      <h3>Develop & Deploy</h3>
      <p>react web dev</p>
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
