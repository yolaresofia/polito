import React, { useContext } from "react";
import { DataContext } from "./../Context/Context";
import Foodbox from "./Foodbox";
import "./../App.css";

const FoodList = ({ lang, match }) => {
  const { foundPlace } = useContext(DataContext);

  const categoryFoods = match.params.categoryName;
  const foundCategory = foundPlace.categorias.find(
    (category) => categoryFoods === category.nombre
  );

  const nameFood = () => {
    switch (lang) {
      case "ca":
        return foundCategory.nombre.toUpperCase();
      case "en":
        return foundCategory.nombre_en.toUpperCase();
      case "es":
        return foundCategory.nombre_es.toUpperCase();
      default:
        return foundCategory.nombre.toUpperCase();
    }
  };
  return (
    <div className="centered fadeIn">
      <div className="list-add">
        <ul className="list-food">
          <h4 className="title-category" style={{color: foundPlace.color}}>{nameFood()}</h4>
          {foundCategory.data.map((oneFood, index) => {
            return <Foodbox {...oneFood} key={index} lang={lang} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default FoodList;
