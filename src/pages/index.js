import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p style={{ textAlign: "center" }}>
      I'm a developer located in Upstate New York who's passionate about
      modernizing the web
    </p>
  </Layout>
)

export default IndexPage
