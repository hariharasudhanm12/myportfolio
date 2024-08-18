import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo"><h1>Naruto</h1></div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Pages</li>
          <li>Contact</li>
          <li>News</li>
          <button className="hire-me-btn">Hire Me</button>
        </ul>
        
      </nav>
    </header>
  );
}

export default Header;
