import React, { useState, useContext } from "react";
import Foodbox from "./Foodbox";
import Searchbar from "./Searchbar";
import { DataContext } from "./../Context/Context";
import Lactosa from './../Assets/Lactosa.svg'
import Tacc from './../Assets/Tacc.svg'


const SearchComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const { lang, flattened, foundPlace } = useContext(DataContext);
  const [filterFoods, setFilterFoods] = useState(flattened);
  const [isLactoseChecked, setIsLactoseChecked] = useState(false)
  const [isGlutenChecked, setIsGlutenChecked] = useState(false)
  const [allergyList, setAllergyList] = useState([]);
  const [displayAllergList, setdisplayAllergList] = useState(false);

  const arrayOfMenu = [];
  foundPlace.categorias.map((x) => arrayOfMenu.push(x.data));

  const handleLactose = () => {
    setdisplayAllergList(true)
    setIsLactoseChecked(!isLactoseChecked)
    listHandler(!isLactoseChecked, 2)
  }

  const handleGluten = () => {
    setdisplayAllergList(true)
    setIsGlutenChecked(!isGlutenChecked)
    listHandler(!isGlutenChecked, 1)
  }

  const filterOnChange = (e) => {
    setInputValue(e.target.value);

    let searchValue = e.target.value.toLowerCase();
    let filteredFoods = flattened.filter(
      (food) =>
        food.nombre.toLowerCase().includes(searchValue) ||
        food.descripcion.toLowerCase().includes(searchValue) ||
        food.tags.toLowerCase().includes(searchValue) ||
        food.nombre_en.toLowerCase().includes(searchValue) ||
        food.descripcion_en.toLowerCase().includes(searchValue) ||
        food.nombre_es.toLowerCase().includes(searchValue) ||
        food.descripcion_es.toLowerCase().includes(searchValue)
    );

    setFilterFoods(filteredFoods);
  };


  const listHandler = (isChecked, number) => {
    const iterablesAlerg = flattened.filter((x) => x.allergen !== undefined);
    console.log(iterablesAlerg);
    const elements = iterablesAlerg.filter(
      (el) => el.allergen.indexOf(number) === -1
    );
    // console.log(elements);
    let newL = [...allergyList];
    if (isChecked) {
      if (newL.length <= 0) {
        newL.push(elements);
      } else {
        // returning a list of all the elements in the menu that do not contain that particular allergen
        newL = [...allergyList].filter(
          (x) => x.allergen.indexOf(number) === -1
        );
        console.log(newL);
      }
      setAllergyList([...new Set(newL.flat())]);
    } else {
      const elemsToPush = iterablesAlerg.filter(
        (el) => el.allergen.indexOf(number) !== -1
      );
      newL.push(elemsToPush);
      setAllergyList([...new Set(newL.flat())]);
    }
  };

  const switchLang = (parameter) => {
    const translations = {
      gluten: ["Sense gluten", "Gluten free", "Sin gluten"],
      lactosa: ["Sense lactosa", "Lactose free", "Sin lactosa"]
    }
    switch (lang) {
      case "ca":
        return translations[parameter][0];
      case "en":
        return translations[parameter][1];
      case "es":
        return translations[parameter][2];
      default:
        return translations[parameter][0]
    }
  };

  return (
    <div className="centered fadeIn">
      <Searchbar
        filterOnChange={filterOnChange}
        inputValue={inputValue}
        lang={lang}
      />
      <div className="iconos-filter">
        <div className={isGlutenChecked?"iconBoxContainerChecked":"iconBoxContainer"} onClick={() => handleGluten()}>
          <img src={Tacc} className="icono-svg" alt=""/>
          {switchLang("gluten")}
        </div>
        <div
          className={isLactoseChecked?"iconBoxContainerChecked":"iconBoxContainer"}
          onClick={() => handleLactose()}
        >
          <img src={Lactosa} className="icono-svg" alt=""/>
          {switchLang("lactosa")}
        </div>
      </div>
      <div className="list-add">
        <ul className="list-food">
          {displayAllergList
            ? allergyList.map((e, i) => <Foodbox {...e} lang={lang} key={i} />)
            : filterFoods.map((e, i) => <Foodbox {...e} lang={lang} key={i} />)}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
