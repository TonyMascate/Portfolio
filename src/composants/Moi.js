import React from "react";
import photo from "../img/portrait.png";

function Moi() {
  return (
    <section id="moi">
      <div className="moi container">
        <div className="cover">
          <div className="portrait">
            <img src={photo} alt="Portrait de Tony Mascate" />
          </div>
        </div>
        <div className="text">
          <h2>Bonjour, je suis Tony Mascate</h2>
          <p>
            Je suis développeur web Front-End. Suite à mon apprentissage en
            autodidacte et après avoir mené plusieurs projets à bien, j’ai
            décidé d’exercer mon activité en temps que Freelance. Mon objectif
            est de vous proposer des solutions digitales afin de vous permettre
            d’avoir une présence numérique sur le web.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Moi;
