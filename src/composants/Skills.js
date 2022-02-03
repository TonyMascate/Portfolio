import React from "react";
import { skillslist } from "../datas/skillslist";
import { GoVerified } from "react-icons/go";

function Skills() {
  return (
    <section id="skills">
      <div className="skills container">
        <div className="title">
          <h2>Mes services</h2>
          <h3>Des services adaptés à vos besoins</h3>
          <div className="underline"></div>
        </div>
        <div className="content">
          {skillslist.map((item, index) => {
            const { domain, outils, skills } = item;
            return (
              <div className="item" key={index}>
                <h2>{domain}</h2>
                <div className="underline"></div>
                <div className="list">
                  {skills.map((skill, index) => {
                    return (
                      <div className="list--item" key={index}>
                        <GoVerified className="icon" />
                        <p>{skill}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="outils">
                  <h2>{index === 0 ? "Langages" : "Outils"}</h2>
                  <div className="outils--list">
                    {outils.map((outil, index) => {
                      return (
                        <div className="btn-outil" key={index}>
                          {outil}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
