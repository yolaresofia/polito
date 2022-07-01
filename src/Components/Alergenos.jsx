import React, { useContext } from "react";
import { DataContext } from "./../Context/Context";
import AlergenosData from "./AlergenosData";
import Alergeno from "./Alergeno";

const Alergenos = () => {
  const {  foundPlace, lang } = useContext(DataContext);

  const arrayOfMenu = [];
  foundPlace.categorias.map((x) => arrayOfMenu.push(x.data));

  const listHandler = (isChecked, number) => {

  };

  return (
    <div className="multiselect">
      {AlergenosData.map((alergeno) => (
        <Alergeno 
          lang={lang}
          key={alergeno.number}
          listHandler={listHandler}
          {...alergeno}
        />
      ))}
    </div>
  );
};

export default Alergenos;
