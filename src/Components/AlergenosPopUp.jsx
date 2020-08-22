import React, { useState, useContext  } from "react";
import Alergenos from "./Alergenos";
import { DataContext } from './../Context/Context'


const AlergenosPopUp = (props) => {
  const [modalPopUpClass, setmodalPopUpClass] = useState("parentPopUp")
  const { foundPlace, lang } = useContext(DataContext)
 
  const titlePopUp = () => {
    switch (lang) {
      case "ca":
        return "¿Tens alguna al·lèrgia?";
      case "en":
        return "Do you have any allergies?";
      case "es":
        return "¿Tienes alguna alergia?";
      default: return "¿Tens alguna al·lèrgia?";
     
    }
  };

  const subtitlePopUp = () => {
    switch (lang) {
      case "ca":
        return "Digueu-nos-ho, només us mostrem els plats adequats per a vosaltres";
      case "en":
        return "Let us know, so we only show you what is adequate for you";
      case "es":
        return "Indicanos asi solo te mostramos platos aptos para ti";
      default: return "Indicanos asi solo te mostramos platos aptos para ti";
     
    }
  };


  const togglePopUp = () => {
    setTimeout(() => {
      props.showAllergenPopUp();
      setmodalPopUpClass("parentPopUp fadeIn")
    }, 300);
    setmodalPopUpClass("parentPopUp fadeOutPopUp")
  }

  return (
    <>
    {props.isOpenPopUp ? (
        <div className="overlayModal" style={{backgroundColor: foundPlace.overlayColor}}>
          <div className={modalPopUpClass} style={{backgroundColor: foundPlace.modalBackgroundColor}} >
            <div className="myPopUp" style={{color: foundPlace.backgroundColor}}>
            <div className="titleContainerPopUp">
                <h3>{titlePopUp()}</h3>
                <p>{subtitlePopUp()}</p>            
            </div>

                <Alergenos />
                <div className="buttonDivUpselling" style={{ border: foundPlace.borderButton, color: foundPlace.color}}>
                  <button
                    className="buttonUpselling buttonClose"
                    style={{ color: foundPlace.backgroundColor}}
                    onClick={togglePopUp}
                  >
                    Continuar
                  </button>
              </div>
            </div>
          </div>
        </div>
        ) : null}
    </>
  );
};

export default AlergenosPopUp;
