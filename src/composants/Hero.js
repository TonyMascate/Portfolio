import React from "react";
import backgroundmov from "../img/background.mov";
import backgroundwebm from "../img/background.webm";
import photo from '../img/photo.png'

function Hero() {
  return (
    <section id="hero">
      <video autoPlay muted loop id="video">
        <source src={backgroundwebm} type="video/webm" />
        <source src={backgroundmov} type="video/mov" />
      </video>
      <div className="hero container">
        <div className="text">
          <div className="content">
            <h1>Tony Mascate</h1>
            <h2>Développeur web freelance</h2>
            <h3>Développeur Front End / Web Designer</h3>
            <div className="buttons">
              <button className="btn-primary">Me découvrir</button>
              <button className="btn-secondary">Mon CV</button>
            </div>
          </div>
        </div>
        <div className="photo">
          <img src={photo} alt="portait de Tony Mascate" />
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1643638019">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
