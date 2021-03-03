import { homedir } from "os";
import React from "react";

// SVG
import CodeSVG from "./code.svg";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center py-2">
        Hi, I'm Mike. I'm a Full Stack Developer based out of Upstate New York.
      </h1>
      <img className="w-full max-h-500 py-2" src={CodeSVG} alt="Code Image" />
    </div>
  );
}

export default Home;
