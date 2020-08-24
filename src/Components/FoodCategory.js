import React from "react";


const FoodCategory = ({ lang, nombre, nombre_en, nombre_es }) => {

    const nameFood = () => {
      switch (lang) {
        case "ca":
          return nombre;
        case "en":
          return nombre_en;
        case "es":
          return nombre_es;
        default: return nombre;
    }
  }
    return (
      <div
        className="box"
      >
        <h1
          className="headerCategory">
          {nameFood()}
        </h1>
      </div>
    );
  }


export default FoodCategory;