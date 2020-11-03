import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// CSS Imports
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 className="header-title">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <nav className="navigation">
        <Link to="/about">about</Link>
        <Link to="/work">work</Link>
        <Link to="/blog">blog</Link>
        <Link to="/contact">contact</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
