import React from "react";
import "./Intro.css";
import photohari from "../Component/images/photohari.jpeg"
function Intro() {
  return (
    <section className="Intro">
      <div className="Intro-content">
        <h1>Hello There!</h1>
        <h2>I'M Hari Hara Sudhan M</h2>
        <p>UI/UX designer and developer who loves crafting great experiences.</p>
        <button>Hire Me</button>
      </div>
      <div className="Intro-image">
        <img src={photohari} alt="Hari"/>
      </div>
    </section>
  );
}

export default Intro;
