import React from 'react';
import { service1, service2 } from '../datas/servicelists';
import mockup from '../img/mockupiphone.svg'
import { FaStickyNote } from 'react-icons/fa'

function services() {
  return (
    <section id="services">
      <div className="services container">
        <div className="title">
          <h2>Mes services</h2>
          <h3>Des services adaptés à vos besoins</h3>
          <div className="underline"></div>
        </div>
        <div className="content">
          <div className="first">
            {service1.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="icon">
                    <FaStickyNote />
                  </div>
                  <div className="text">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <img src={mockup} alt="mockup d'un iphone" />
          <div className="second">
            {service2.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="icon">
                    <FaStickyNote />
                  </div>
                  <div className="text">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default services;
