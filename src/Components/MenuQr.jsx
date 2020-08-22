import React from "react";
import mobileqr from "./../Assets/mobil-qr.png";
import flecha from "./../Assets/flecha.png";

export default function MenuQr() {
  const scrollToX = () => {
    const carrouselContainer = document.getElementById("carrousel-container");
    if (carrouselContainer.scrollLeft < window.innerWidth * 1.7) {
      carrouselContainer.scrollBy(window.innerWidth, 0);
    } else {
      carrouselContainer.scrollBy(-1 * window.innerWidth * 2, 0);
    }
  };

  return (
    <section id="MenuQR" className="MenuQR">
      <div onClick={() => scrollToX()} id="arrow-right">
        <img className="arrow-png-menuqr" src={flecha} alt="" />
      </div>
      <div id="carrousel-container" className="carrousel-container">
        <div className="section-qr-container ">
          <div className="img-qr-container">
            {" "}
            <div className="QR-desktop">
              <h1 className="header-QR-desktop">
                CARTA INTERACTIVA
              </h1>
              <p className="QR-text-desktop">
                {" "}
                Si las cartas QR llegaron para protegernos del Covid-19, 
                nuestra carta interactiva llegó para ofrecer un servicio interactivo que hará que
                tus clientes no sólo te recuerden por tus deliciosos platos.
                Destácate con los filtros de preferencias y selección de idiomas
                con esta opción que además cuida nuestro planeta.
              </p>
            </div>
            {window.innerWidth > 500 ? (
              <img className="img-qr" src={mobileqr} alt="" />
            ) : (
              <img className="img-qr-test" src={mobileqr} alt="" />
            )}
          </div>
          <div className="buttons-caption-qr-container">
            <h1 className="header-QR-mobile">
              CARTA <br/> INTERACTIVA
            </h1>
            <a className="button-qr" href="https://collabo.studio/larovira">
              Ver Demo
            </a>
            <p className="QR-text-mobile">
              {" "}
              Las cartas QR llegaron para protegernos de la amenaza del
              COVID-19. Conoce màs sobre la nueva opciòn que además cuida
              nuestro planeta.
            </p>
          </div>
        </div>
        <div className="section-qr-container ">
          <ul className="grid-container">
            <li>Plan de pago mensual</li>
            <li>Diseño de carta interactiva</li>
            <li>Filtros de preferencia</li>
            <li>Mantenimiento mensual</li>
            <li>Traducción a 3 idiomas</li>
            <li>Barra de Busqueda</li>
            <li>Servidor seguro todo el año</li>
            <li>Codigo QR y enlace propio</li>
            <li>Adhesivos para tus mesas</li>
          </ul>
          <div className="buttons-caption-qr-container">
            <h1 className="header-QR">
              BENEFICIOS
              <br /> CARTA <br/> INTERACTIVA
            </h1>
          </div>
        </div>
        <div className="section-qr-container ">
          <div className="references-container">
            <h1>REFERENCIAS</h1>
            <p>
              {" "}
              "Desde que usamos la carta segura podemos cuidar de nuestros
              clientes para que disfruten con total seguridad. <br />
              Funciona super rápido y podemos mostrarles solo las opciones de
              comida que les gusten en su idioma."
            </p>
            <h4>Mauri, de Polito. </h4>
          </div>
          <div className="buttons-caption-qr-container">
            <h1 className="header-QR">
              NUESTROS <br /> CLIENTES
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
