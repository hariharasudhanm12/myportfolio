import React from "react";
import "./Blog.css";
import blog1 from "../Component/images/blog1.jpg"
import car from "../Component/images/car.jpg"
import glass from "../Component/images/glass.jpg"

function Blog() {
  return (
    <section className="blog">
      <h2>Blog Us</h2>
      <div className="blog-list">
        <div className="blog-item">
          <img src={blog1} alt="Blog 1" className="blog-img" />
          <h3>Blog </h3>
          <p>Nice way to show case the blog page with blog picture so see it!</p>
        </div>
        <div className="blog-item">
          <img src={car} alt="Blog 2" className="blog-img" />
          <h3>Car</h3>
          <p>All of us like car so the car nic pic to be mention in the blog area.</p>
        </div>
        <div className="blog-item">
          <img src={glass} alt="Blog 3" className="blog-img" />
          <h3>Sun Glass</h3>
          <p>All of us are intrested in style glass shows all of us in style</p>
        </div>
      </div>
    </section>
  );
}

export default Blog;
