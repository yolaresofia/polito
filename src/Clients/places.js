import React, { useState } from "react";
import DivisionList from "../Components/DivisionList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Foodlist from "../Components/Foodlist";
import DividedFoodlist from "../Components/DividedFoodList";
import { DataContext } from "./../Context/Context";
import SearchComponent from "../Components/SearchComponent";
import foods from "../foods.json";
import Glass from "./../Assets/search-outline.svg";
import LeftArrow from "./../Assets/left-arrow.svg";
import "./../App.css";
import home from "./../Assets/home.svg";

const foundPlace = foods.places[0];
const arrayOfMenu = [];
foundPlace.categorias.map((x) => arrayOfMenu.push(x.data));
let flattened = arrayOfMenu.flat();

function Places() {
  const [buscar, setBuscar] = useState(false);
  const [lang, setLang] = useState("ca");
  const [isOpen] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const categoryAndSearchSwitcher = () => {
    setBuscar(false);
    setShowBack(false);
  };

  const search = () => {
    switch (lang) {
      case "ca":
        return "Buscar";
      case "en":
        return "Search";
      case "es":
        return "Buscar";
      default:
        return "Buscar";
    }
  };

  const visita = () => {
    switch (lang) {
      case "ca":
        return "Visiti la nostra web";
      case "en":
        return "Visit our website";
      case "es":
        return "Visita nuestra web";
      default:
        return "Visiti la nostra web";
    }
  };

  const navigateToHome = () => {
    window.location.href = "/";
  };
  return (
    <div className="App version-movil">
      <div className="contenedor-movil">
        <div className="App-desktop-container">
          <DataContext.Provider
            value={{
              lang,
              buscar,
              foundPlace,
              flattened,
              isOpen,
            }}
          >
            <div>
              <>
                {showBack ? (
                  <div onClick={categoryAndSearchSwitcher}>
                    {" "}
                    <div onClick={navigateToHome}>
                      <img className="homeIcon" src={home} alt="" />
                    </div>
                  </div>
                ) : (
                  <a href="https://politocastelldefels.com">
                    <h6 className="visitaweb">{visita()}</h6>
                    <div className="visitaweb-container"> </div>
                  </a>
                )}
                <div className="languages">
                  <div
                    className={
                      lang === "ca" ? "perLanguage-act" : "perLanguage"
                    }
                    onClick={() => setLang("ca")}
                  >
                    CA
                  </div>
                  <div
                    className={
                      lang === "en" ? "perLanguage-act" : "perLanguage"
                    }
                    onClick={() => setLang("en")}
                  >
                    EN
                  </div>
                  <div
                    className={
                      lang === "es" ? "perLanguage-act" : "perLanguage"
                    }
                    onClick={() => setLang("es")}
                  >
                    ES
                  </div>
                </div>
                <img src={foundPlace.iso} alt="logo" className="isoTipo" />
                <div className="homeAndSearch">
                  <div
                    className="search-bar"
                    onClick={() => setBuscar(!buscar)}
                  >
                    {buscar ? (
                      <div className="buscador">
                        <img src={LeftArrow} className="search-glass" alt="" />
                        <p>{lang === "en" ? "Back" : "Volver"}</p>
                      </div>
                    ) : (
                      <div className="buscador">
                        <img src={Glass} className="search-glass" alt="" />
                        <p>{search()}</p>
                      </div>
                    )}
                  </div>
                </div>
                {buscar ? (
                  <SearchComponent lang={lang} />
                ) : (
                  <div
                    onClick={() => {
                      setShowBack(true);
                    }}
                  >
                    <BrowserRouter>
                      <Routes>
                        <Route
                          exact
                          path="/"
                          element={<DivisionList lang={lang} />}
                        />
                        <Route
                          exact
                          path="/:place"
                          element={<DivisionList lang={lang} />}
                        />
                        <Route
                          exact
                          path="/:place/division/:divisionName"
                          element={<DividedFoodlist lang={lang} />}
                        />
                        <Route
                          exact
                          path="/:place/division/:divisionName/category/:categoryName"
                          element={<Foodlist lang={lang} />}
                        />
                      </Routes>
                    </BrowserRouter>
                  </div>
                )}
              </>
            </div>
          </DataContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Places;
