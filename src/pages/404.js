import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="SOS" />
    <h1>404: You are lost...</h1>
    <p>You have wandered off the beaten path. Please go back!</p>
  </Layout>
)

export default NotFoundPage
