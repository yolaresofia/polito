/* eslint-disable no-undef */
import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./../Context/Context";

const FoodBox = ({ lang, nombre, precio }) => {
  const { flattened } = useContext(DataContext);
  const [isSafari, setisSafari] = useState(false);
  useEffect(() => {
    var isSafariBrowser = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );
    setisSafari(isSafariBrowser);
  }, []);

  const switchLang = (parameter) => {
    let product = flattened.find((el) => el.nombre === nombre);
    let parameterEs = `${parameter}_es`;
    let parameterEn = `${parameter}_en`;
    switch (lang) {
      case "ca":
        return product[parameter];
      case "en":
        return product[parameterEn];
      case "es":
        return product[parameterEs];
      default:
        return product[parameter];
    }
  };

  return (
    <div className="food-box">
      <div className="left-box">
        <h4 style={{ marginTop: isSafari ? 0 : "1.1em" }}>
          {switchLang("nombre")}
        </h4>
        <p>{switchLang("descripcion")}</p>
      </div>
      <h3 className="h4-precio">{precio}€</h3>
    </div>
  );
};

export default FoodBox;
