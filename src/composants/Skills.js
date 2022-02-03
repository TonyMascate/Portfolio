import React from 'react';
import { skillslist } from '../datas/skillslist';

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
                const {domain, outils, skills} = item
                return(
                    <div className="item">
                        <h2>{domain}</h2>
                        <div className="underline"></div>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
