import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi there, I'm Mike</h1>
    <p>
      I'm a developer located in Upstate New York who's passionate about
      modernizing the web
    </p>
    <ul>
      <li>
        Email: <a href="mailto:mkmllgn@gmail.com">mkmllgn@gmail.com</a>
      </li>
      <li>
        Linkedin:{" "}
        <a href="https://www.linkedin.com/in/michaelmulligan94/">
          Mike Mulligan
        </a>
      </li>
      <li>
        Twitter: <a href="https://twitter.com/mulligandev">@mulligandev</a>
      </li>
      <li>
        Github: <a href="https://github.com/mulligandev">@mulligandev</a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
