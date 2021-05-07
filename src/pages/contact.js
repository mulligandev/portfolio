import React from "react";
import Layout from "../components/layout";

import * as styles from "./contact.module.css";

export default function Contact() {
  return (
    <Layout>
      <section className={styles.contact}>
        <h1>I'd love to talk! Email me at the address below</h1>
        <p>
          <a href="mailto:mkmllgn@gmail.com">mkmllgn@gmail.com</a>
        </p>
      </section>
    </Layout>
  );
}
