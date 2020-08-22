import React, { useState, useContext } from "react";
import { DataContext } from './../Context/Context'

const Upselling = ({ isOpen, showModal }) => {
  const { foundPlace, lang } = useContext(DataContext)
  const [modalClass, setmodalClass] = useState("parentModal")
  
  const toggleAnimation = () => {
    setTimeout(() => {
      showModal()
      setmodalClass("parentModal fadeIn")
    }, 300);
    setmodalClass("parentModal fadeOut")
  }


  const switchLang = (parameter) => {
    let parameterEs = `${parameter}_es`;
    let parameterEn = `${parameter}_en`;
    switch (lang) {
      case "ca":
        return foundPlace[parameter];
      case "en":
        return foundPlace[parameterEn];
      case "es":
        return foundPlace[parameterEs];
      default:
        return foundPlace[parameter]
    }
  };


  return (
    <>
      {isOpen ? (
        <div className="overlayModal"  style={{backgroundColor: foundPlace.overlayColor}}>
          <div className={modalClass} style={{backgroundColor: foundPlace.modalBackgroundColor}}>
            <div className="mymodal" style={{color: foundPlace.backgroundColor}}>
              <h1>{switchLang('sugerenciaDelDiaTitulo')}</h1>
              <hr className="modalDivider" />
              <div>
                <img src={foundPlace.sugerenciaDelDiaImg} className="guineu" alt="" />
              </div>
              <p>
              {switchLang('sugerenciaDelDiaDescripcion')}
              </p>
              <hr className="modalDivider" />
              <div>
                <div className="buttonDivUpselling" style={{ border: foundPlace.borderButton, color: foundPlace.color}}>
                  <button
                    className="buttonUpselling buttonClose"
                    style={{ color: foundPlace.backgroundColor}}
                    onClick={toggleAnimation}
                  >
                    {switchLang('sugerenciaDelDiaBoton')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Upselling;
