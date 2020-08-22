import React from "react";
import logo from "./../Assets/logo-blanco.png";
import arrow from "./../Assets/contact-arrow.png";

export default function Contact() {
  return (
    <section id="Contacto" className="contacto">
      <div className="logo">
        <img className="contact-logo" src={logo} alt="" />
      </div>
      <div className="div-vacio1"></div>
      <div className="studio">
        <h3>Studio</h3>
        <h3 className="grey">Torrent de les flors 158</h3>
        <h3 className="grey">08024</h3>
        <h3 className="grey">Barcelona</h3>
      </div>
      <div className="general">
        <h3>General</h3>
        <a href="mailto:info.collabostudio@gmail.com">
          <h3 className="mail">info@collabo.studio</h3>
        </a>
        <h3 className="grey">+34 600 377 679</h3>
      </div>
      <div className="logo-flecha">
        <a href="#Inicio">
          <img className="contact-arrow" src={arrow} alt="" />
        </a>
      </div>
      <div className="div-vacio2"></div>
      <div className="div-vacio3"></div>
      <div className="social bottom">
        <h3>Social</h3>
        <a href="https://www.instagram.com/collabostudio/?hl=es">
          <h3 className="grey">Instagram</h3>
        </a>
        <a href="https://www.facebook.com/Collabo-Studio-106002161205657">
          <h3 className="grey">Facebook</h3>
        </a>
      </div>
      <div className="createdby bottom">
        <h3 className="grey collabostudio">Created by Collabo Studio</h3>
      </div>
      <div className="allrights bottom">
        <h3 className="grey">2020 - All rights reserved</h3>
      </div>
    </section>
  );
}