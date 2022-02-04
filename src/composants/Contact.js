import React from "react";
import { FaMapMarkedAlt, FaUserAlt, FaBuilding } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <section id="contact">
      <div className="contact">
        <div className="title">
          <h2>Me contacter</h2>
          <h3>besoin d’un avis? d’un devis ?</h3>
          <div className="underline"></div>
        </div>
        <div className="content">
          <div className="info">
            <div className="info--element">
              <FaMapMarkedAlt className="icon" />
              <p>L'Isle Jourdain, Gers, France</p>
            </div>
            <div className="underline"></div>
            <div className="info--element">
              <BsFillTelephoneFill className="icon" />
              <p>00 00 00 00 00</p>
            </div>
            <div className="underline"></div>
            <div className="info--element">
              <IoMdMail className="icon" />
              <p>tonymascatedev@gmail.com</p>
            </div>
          </div>
          <div className="form">
            <form action="">
              <div className="input">
                <div className="icon-container">
                  <FaUserAlt className="icon" />
                </div>
                <input type="text" name="name" id="name" placeholder="Nom / Prénom" required />
              </div>
              <div className="input">
                <div className="icon-container">
                  <FaBuilding className="icon" />
                </div>
                <input type="text" name="raisonsociale" id="raisonsociale" placeholder="Raison sociale ( facultatif )"/>
              </div>
              <div className="input">
                <div className="icon-container">
                  <IoMdMail className="icon" />
                </div>
                <input type="email" name="email" id="email" placeholder="E-mail" required />
              </div>
              <div className="input">
                <div className="icon-container">
                  <BsFillTelephoneFill className="icon" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                  placeholder="Téléphone"
                  required
                />
              </div>
              <textarea name="message" id="message" placeholder="Merci de détailler votre requête ici en donnant le plus de détail possible."></textarea>
              <button className="btn-primary" type="submit">ENVOYER</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
