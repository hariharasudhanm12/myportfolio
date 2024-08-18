import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <i className="fas fa-laptop-code"></i> {/* FontAwesome Icon */}
          <h3>Web Development</h3>
          <p>
            We build responsive and performant websites tailored to your needs.
          </p>
        </div>
        <div className="service-item">
          <i className="fas fa-paint-brush"></i> {/* FontAwesome Icon */}
          <h3>UI/UX Design</h3>
          <p>
            Creating beautiful and user-friendly interfaces that provide a seamless user experience.
          </p>
        </div>
        <div className="service-item">
          <i className="fas fa-mobile-alt"></i> {/* FontAwesome Icon */}
          <h3>Mobile Development</h3>
          <p>
            Developing high-quality mobile applications for iOS and Android platforms.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
