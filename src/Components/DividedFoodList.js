import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import { Link } from "react-router-dom";
import FoodCategory from "./FoodCategory";
import "./../App.css";

const DividedFoodList = ({ lang, match }) => {
  const { foundPlace } = useContext(DataContext);
  const divisionFoods = match.params.divisionName;
  const selectedCategories = foundPlace.categorias.filter(
    (x) => x.division === divisionFoods
  );
  return (
    <div className="centered fadeIn">
      <div className="list-add">
        <ul className="list-food">
          {selectedCategories.map((category, index) => {
            return (
              <Link
                style={{ color: foundPlace.color }}
                key={index}
                to={`${divisionFoods}/category/${category.nombre}`}
              >
                <FoodCategory {...category} lang={lang} />
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DividedFoodList;
