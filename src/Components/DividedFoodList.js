import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import { Link, useParams } from "react-router-dom";
import FoodCategory from "./FoodCategory";
import "./../App.css";
const DividedFoodList = ({ lang, match }) => {
  const { foundPlace } = useContext(DataContext);

  const { divisionName: divisionFoods } = useParams();
  const selectedCategories = foundPlace.categorias.filter(
    (x) => x.division === divisionFoods
  );
  return (
    <div className="fadeIn">
      <div className="list-add">
        <ul className="list-food division">
          {selectedCategories.map((category, index) => {
            return (
              <Link
                style={{ color: foundPlace.color }}
                key={index}
                to={`category/${category.nombre}`}
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
