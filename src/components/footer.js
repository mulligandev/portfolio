import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div>
        <p className="footer-title">© {new Date().getFullYear()}</p>
        <p>Michael Mulligan</p>
      </div>
      <div>
        <p className="footer-title">Built with</p>
        <p>Gatsby</p>
      </div>
      <div>
        <p className="footer-title">Deployed on</p>
        <p>Netlify</p>
      </div>
      <div className="social-links">
        <a className="twitter" href="https://twitter.com/mulligandev">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/michaelmulligan94/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="github" href="https://github.com/mulligandev">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="mail" href="mailto:mkmllgn@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
