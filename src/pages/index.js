import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

// Components
import Layout from "../components/layout";

// CSS Styles
import * as styles from "./index.module.css";

// markup
const About = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mike Mulligan | Lead Engineer @ Booz Allen Hamilton</title>
      </Helmet>
      <div className={styles.aboutPage}>
        <div className={styles.mainInfo}>
          <StaticImage
            className={styles.portrait}
            src="../images/portrait.jpg"
            alt="Portrait of Mike Mulligan"
            layout="constrained"
            quality={100}
            width={250}
          />
          <section>
            <h1>Mike Mulligan</h1>
            <span>
              <FontAwesomeIcon
                icon={faBriefcase}
                style={{ marginRight: "0.5rem" }}
              />
              Lead Engineer @ Booz Allen Hamilton
            </span>
            <ul className={styles.skills}>
              <li>
                <span>JavaScript</span>
              </li>
              <li>
                <span>React</span>
              </li>
              <li>
                <span>GraphQL</span>
              </li>
              <li>
                <span>Node.js</span>
              </li>
            </ul>
          </section>
        </div>
        <p className={styles.about}>
          <em>Who am I?</em> Hi there! I'm Mike. I work as a lead engineer @
          Booz Allen Hamilton. My expertise are in <span>front end</span> web
          app development using modern technologies such as <span>React</span>,{" "}
          <span>Redux</span>, and <span>GraphQL</span>.
        </p>
        <p className={styles.about}>
          <em>What do I like to do?</em> I like building web applications that
          are <span>modern</span> and solve <span>complex</span> problems. In my
          free time, I enjoy building <span>full stack</span> web apps in
          Node.js.
        </p>
      </div>
    </Layout>
  );
};

export default About;
