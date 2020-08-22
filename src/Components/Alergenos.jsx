import React, { useContext } from "react";
import { DataContext } from "./../Context/Context";
import AlergenosData from "./AlergenosData";
import Alergeno from "./Alergeno";

const Alergenos = () => {
  const { allergyList, setAllergyList, foundPlace, lang } = useContext(DataContext);

  const arrayOfMenu = [];
  foundPlace.categorias.map((x) => arrayOfMenu.push(x.data));
  const flattened = arrayOfMenu.flat();

  const listHandler = (isChecked, number) => {
    const iterablesAlerg = flattened.filter((x) => x.alergenos !== undefined);
    const elements = iterablesAlerg.filter(
      (el) => el.alergenos.indexOf(+number) === -1
    );
    let newL = [...allergyList];
    if (isChecked) {
      if (newL.length <= 0) {
        newL.push(elements);
      } else {
        // returning a list of all the elements in the menu that do not contain that particular allergen
        newL = [...allergyList].filter(
          (x) => x.alergenos.indexOf(number) === -1
        );
      }
      setAllergyList([...new Set(newL.flat())]);
    } else {
      const elemsToPush = iterablesAlerg.filter(
        (el) => el.alergenos.indexOf(number) !== -1
      );
      newL.push(elemsToPush);
      setAllergyList([...new Set(newL.flat())]);
    }
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
