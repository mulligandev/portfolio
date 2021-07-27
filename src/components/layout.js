import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import * as styles from "./layout.module.css";

const ListLink = (props) => (
  <li>
    <Link activeClassName={styles.active} to={props.to}>
      {props.children}
    </Link>
  </li>
);

export default function Layout({ children }) {
  return (
    <div className={styles.appContainer}>
      <header className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>MM</span>
          </Link>
        </div>
        {/* Nav Links */}
        <ul className={`${styles.navLinks}`}>
          <ListLink to="/">About</ListLink>
          <ListLink to="/resume">Resume</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
      <footer>
        <ul className={styles.social}>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/michaelmulligan94/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mullim"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/mulligandev"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
