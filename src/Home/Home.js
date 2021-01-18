import React from "react";

// SVG
import { ReactComponent as CodeSVG } from "./code.svg";

// CSS
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>
        Hi, I'm Mike. I'm a Full Stack Developer based out of Upstate New York.
      </h1>
      <CodeSVG />
    </div>
  );
}
