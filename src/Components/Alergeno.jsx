import React, { useState } from "react";

const Alergeno = (props) => {
const [checked, setChecked] = useState(false)

  const clickHandler = (isChecked, number) => {
      setChecked(!checked)
      props.listHandler(isChecked, number)
  }
  
  const nameAlergeno = () => {
    switch (props.lang) {
      case "ca":
        return props.name;
      case "en":
        return props.name_eng;
      case "es":
        return props.name_es;
      default: return props.name;
    }
  };


  return (
    <label className={checked?"iconBoxContainerChecked":"iconBoxContainer"} onClick={() => clickHandler(checked, props.number)} htmlFor={props.number}>
      <img className="allergenIcons" src={props.source} alt={props.name} />
      <p>{nameAlergeno ()}</p>
    </label>
  );
};

export default Alergeno;
