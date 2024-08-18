import React from "react";
import "./Portfolio.css";
import logo from "../Component/images/logodesign.jpg"
import ui from "../Component/images/uidesign.jpg"
import web from "../Component/images/webdesign.jpg"
import edit from "../Component/images/uxdesign.jpg"
import game from "../Component/images/gamedesign.jpg"
import app from "../Component/images/appdesign.jpg"
import dep from "../Component/images/webdevelop.jpg"
import fas from "../Component/images/fasihon.jpg"

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src={logo} alt="Project 1" className="portfolio-img" />
          <p>Logo Design</p>
        </div>
        <div className="portfolio-item">
          <img src={ui} alt="Project 2" className="portfolio-img" />
          <p>Ui Design</p>
        </div>
        <div className="portfolio-item">
          <img src={web} alt="Project 3" className="portfolio-img" />
          <p>Web Design</p>
        </div>
        <div className="portfolio-item">
          <img src={edit} alt="Project 4" className="portfolio-img" />
          <p>Editing</p>
        </div>
        <div className="portfolio-item">
          <img src={game}  alt="Project 5" className="portfolio-img" />
          <p>Game Editing</p>
        </div>
        <div className="portfolio-item">
          <img src={app} alt="Project 6" className="portfolio-img" />
          <p>App Design</p>
        </div>
        <div className="portfolio-item">
          <img src={dep}  alt="Project 7" className="portfolio-img" />
          <p>Game Design</p>
        </div>
        <div className="portfolio-item">
          <img src={fas} alt="Project 8" className="portfolio-img" />
          <p>Game Develpment</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
