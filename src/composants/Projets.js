import React from 'react';
import {projects} from '../datas/projectlist'

function Projets({projets}) {
  return (
    <section id="projets" ref={projets}>
      <div className="projets container">
        <div className="title">
          <h2>Mes projets</h2>
          <h3>réalisés dans leur globalité</h3>
          <div className="underline"></div>
        </div>
        <div className="content">
            {projects.map((item, index) => {
                const {nom, desc, mockup, link} = item
                return (
                  <div className="item" key={index}>
                    <div className="info">
                      <h3>{nom}</h3>
                      <p>{desc}</p>
                      <a href={link} className="btn-primary">
                        VOIR LE SITE
                      </a>
                    </div>
                    <div className="image">
                      <img src={mockup} alt="mockup du site" />
                    </div>
                  </div>
                );
            })}
        </div>
      </div>
    </section>
  );
}

export default Projets;
