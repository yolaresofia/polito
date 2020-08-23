import React, { useState, useContext } from "react";
import Foodbox from "./Foodbox";
import Searchbar from "./Searchbar";
import { DataContext } from "./../Context/Context";
import Lactosa from './../Assets/Lactosa.svg'
import Tacc from './../Assets/Tacc.svg'


const SearchComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const { lang, allergyList, flattened } = useContext(DataContext);
  const [filterFoods, setFilterFoods] = useState(flattened);

  const [displayAllergList, setdisplayAllergList] = useState(false);

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

  const filterByTag = (tag) => {
    setdisplayAllergList(false);
    let filteredFoods = flattened.filter((food) =>
      food.tags.toLowerCase().includes(tag) !== true
    );

    setFilterFoods(filteredFoods);
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
        <div className="iconos-filter-text" onClick={() => filterByTag("gluten")}>
          <img src={Tacc} className="allergenicons" alt=""/>
          {switchLang("gluten")}
        </div>
        <div
          className="iconos-filter-text"
          onClick={() => filterByTag("lactosa")}
        >
          <img src={Lactosa} alt=""/>
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
