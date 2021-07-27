import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";

import * as styles from "./resume.module.css";

export default function Resume() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mike Mulligan | Resume</title>
      </Helmet>
      <div className={styles.resume}>
        <section>
          <h2>Mike Mulligan</h2>
          <h4>Skills</h4>
          <ul>
            <li>Languages: JavaScript/TypeScript, HTML, CSS, Java, Python</li>
            <li>
              Frameworks/Libraries: React, Redux, Webpack, Lerna, Node.js,
              Express, Electron, GraphQL, Elasticsearch, Gatsby, Leaflet,
              PostCSS, Sass, and Vega
            </li>
            <li>Databases: MongoDB, PostreSQL, SQLite</li>
            <li>
              Other: Git (Github, Gitlab, and Bitbucket), Docker, AWS, VSCode,
              Agile Processes
            </li>
          </ul>
        </section>
        <section className={styles.work}>
          <h4>Work Experience</h4>
          <ul>
            <li>
              <span>Booz Allen Hamilton - Associate | Lead Engineer</span> -
              January 2021 - Present
              <ul>
                <li>
                  Working as a lead engineer developing front end web
                  applications using React, Redux, and GraphQL
                </li>
                <li>
                  Created and maintain a UI component library in React using
                  Storybook, TailwindCSS, and Vega-Lite
                </li>
                <li>
                  Mentor mid and junior level engineers to help get them up to
                  speed with front end web development best practices
                </li>
              </ul>
            </li>
            <li>
              <span>
                Booz Allen Hamilton - Senior Consultant | Staff Engineer
              </span>{" "}
              - February 2020 - December 2020
              <ul>
                <li>
                  Built a front end architecture for development and production
                  environments using Lerna and Webpack
                </li>
                <li>
                  Worked with a team of engineers to build a data visualization
                  app from the ground up using React, Redux, GraphQL, and
                  Vega-Lite
                </li>
                <li>
                  Worked on back-end RESTful API's using Java and RESTEasy
                </li>
                <li>
                  Built an internal tool with Electron used for syncing
                  Atlassian instances
                </li>
              </ul>
            </li>
            <li>
              <span>CACI - Software Engineer T1</span> - August 2018 - January
              2020
              <ul>
                <li>
                  Worked with a team of engineers developing web applications
                  that support the AFRL information directorate
                </li>
                <li>
                  Built web applications using HTML, CSS, JavaScript, Node.js,
                  Java, and PostgreSQL
                </li>
                <li>
                  Made open-source contributions to the Roosevelt MVC web
                  framework
                </li>
              </ul>
            </li>
            <li>
              <span>CACI - Web Development Intern</span> - May 2018 - August
              2018
              <ul>
                <li>
                  Worked on a web application built with HTML, CSS, JavaScript,
                  Node.js, and PostgreSQL
                </li>
                <li>
                  Increased code coverage by writing unit tests with Mocha
                </li>
                <li>
                  Made open-source contributions to the Roosevelt MVC web
                  framework
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <p className={styles.more}>
            For more information please contact me at{" "}
            <a href="mailto: mkmllgn@gmail.com">mkmllgn@gmail.com</a>
          </p>
        </section>
      </div>
    </Layout>
  );
}
