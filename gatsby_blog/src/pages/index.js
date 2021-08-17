import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Brian's Thoughts</h1>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          description
          title
          date
        }   
        excerpt
      }
    }
  }
}
`
