import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <section id="footer">
      <div className="footer">
        <div className="content">
          <div className="about">
            <h2>Développeur web freelance</h2>
            <p>
              Développeur web Front-end freelance. Je suis à l’écoute de tout
              projet de création de site web ou d’application web.
            </p>
            <p>
              N’hésitez pas à me contacter si vous souhaitez réaliser un devis
              ou obtenir des informations à propos d’un projet.
            </p>
          </div>
          <div className="moi">
            <h2>Tony Mascate</h2>
            <div className="contact-item">
              <IoMdMail className="icon" />
              <p className="mail">tonymascatedev@gmail.com</p>
            </div>
            <div className="contact-item">
              <BsFillTelephoneFill className="icon" />
              <p>00 00 00 00 00</p>
            </div>
            <div className="contact-item">
              <FaMapMarkedAlt className="icon" />
              <p>L’Isle Jourdain, Gers, France</p>
            </div>
            <div className="socials">
              <a href="#" className="icon-container">
                <AiFillInstagram className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/tony-mascate/"
                className="icon-container"
              >
                <AiFillLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">© 2022 - Tony Mascate, tous droits réservés</p>
      </div>
    </section>
  );
}

export default Footer;
