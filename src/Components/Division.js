import React, { useContext} from "react";
import { DataContext } from '../Context/Context'

const Division = (props) => {

  const {foundPlace, lang} = useContext(DataContext)
    const nameFood = () => {
      switch (lang) {
        case "ca":
          return props.nombre;
        case "en":
          return props.nombre_en;
        case "es":
          return props.nombre_es;
        default: return props.nombre;
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


export default Division;