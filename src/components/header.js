import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// CSS Imports
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1rem`,
      }}
    >
      <h1 style={{ /* margin: 0 */ display: "inline" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            "background-image": "linear-gradient(to right, #727273, #262626)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav className="navigation">
        <a href="#">about</a>
        <a href="#">work</a>
        <a href="#">blog</a>
        <a href="#">contact</a>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
