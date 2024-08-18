import React from "react";
import "./AboutMe.css";
import photohari from "../Component/images/photohari.jpeg"

function AboutMe() {
  return (
    <section className="about-me">
      <div className="profile-picture">
        <img
          src={photohari}
          alt="Hari"
        />
      </div>
      <div className="about-me-content">
        <h2>About Me</h2>
        <h1>I'm Hari hara sudhan M</h1>
        <p>
          I'm a UI/UX designer and developer with over 5 years of experience
          creating beautiful and user-friendly digital experiences. I have a
          strong passion for creativity and solving problems through design.
          Let’s build something amazing together.
        </p>
        <div className="socials">
          <div className="social-icon linkedin">
            <i className="fab fa-linkedin"></i>
          </div>
          <div className="social-icon github">
            <i className="fab fa-github"></i>
          </div>
          <div className="social-icon twitter">
            <i className="fab fa-twitter"></i>
          </div>
        </div>
        <button className="Cv">Download Cv</button>
        <button className="Me">Contact Me</button>
      </div>
    </section>
  );
}

export default AboutMe;
