import React, { useContext } from "react";
import { DataContext } from './../Context/Context'


const FoodCategory = ({ lang, nombre, nombre_en, nombre_es }) => {

  const {foundPlace} = useContext(DataContext)
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
        style={{
          height: `calc(70vh/${foundPlace.categorias.length})`,
          alignItems: "center",
          display: "flex",
          borderTop: `1px solid ${foundPlace.color}`,
          borderBottom: `1px solid ${foundPlace.color}`
        }}
      >
        <h1
          className="headerCategory"
          style={{
            fontSize: `calc(62vh/${foundPlace.categorias.length}/2.5)`,
            margin: "auto",
            color: foundPlace.color,
          }}>
          {nameFood()}
        </h1>
      </div>
    );
  }


export default FoodCategory;