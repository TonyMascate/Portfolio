import React, { useEffect, useRef, useState } from "react";
import logo from "../img/logo.svg";
import { Link } from "react-scroll";
import { GrServices } from "react-icons/gr";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import skill from "../img/skill.svg";
import projects from "../img/projects.svg";
import services from "../img/services.svg";

function Navbar() {
  return (
    <>
      <nav className="large">
        <a href="#hero">
          <img src={logo} alt="logo" />
        </a>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              hashSpy={true}
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              hashSpy={true}
            >
              COMPÉTENCES
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projets"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              hashSpy={true}
            >
              PROJETS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="moi"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              hashSpy={true}
            >
              À PROPOS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              hashSpy={true}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="mobile">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              hashSpy={true}
            >
              <img src={services} alt="logo de services" className="icon" />
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              hashSpy={true}
            >
              <img src={skill} alt="logo compétences" className="icon" />
              <p>Compétences</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projets"
              spy={true}
              smooth={true}
              duration={500}
              hashSpy={true}
            >
              <img src={projects} alt="logo compétences" className="icon" />
              <p>Projets</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="moi"
              spy={true}
              smooth={true}
              duration={500}
              hashSpy={true}
            >
              <BsFillInfoCircleFill className="icon" />
              <p>À propos</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              hashSpy={true}
            >
              <IoMdMail className="icon" />
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
