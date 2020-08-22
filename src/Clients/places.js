import React, { useState } from "react";
import DivisionList from "../Components/DivisionList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Foodlist from "../Components/Foodlist";
import DividedFoodlist from "../Components/DividedFoodList";
import { DataContext } from "./../Context/Context";
import SearchComponent from "../Components/SearchComponent";
import foods from "../foods.json";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineSearch } from "react-icons/ai";
import "./../App.css";
import Upselling from "../Components/Upselling";
import home from './../Assets/home.svg'



const param = window.location.pathname.slice(1);
const foundPlace =foods.places.find((x) => x.place === param) || foods.places[0];
const option1 = foundPlace.place || "";
const arrayOfMenu = [];
foundPlace.categorias.map((x) => arrayOfMenu.push(x.data));
let flattened = arrayOfMenu.flat();

function Places() {
  const [buscar, setBuscar] = useState(false);
  const [lang, setLang] = useState("ca");
  const [isOpen, setIsOpen] = useState(false);
  const [allergyList, setAllergyList] = useState([]);
  const [showBack, setShowBack] = useState(false);

  const showModal = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <div className="App version-movil">
      <div className="contenedor-movil">
        <div className="App-desktop-container">
          <Router>
            <DataContext.Provider
              value={{
                lang,
                buscar,
                allergyList,
                setAllergyList,
                param,
                foundPlace,
                flattened,
                isOpen
              }}
            >
              <Upselling isOpen={isOpen} showModal={showModal} />

              <Helmet>
                <style>{`body { background-color: ${foundPlace.backgroundColor}; min-height:100vh; font-family: ${foundPlace.font}; color: ${foundPlace.color}}`}</style>
              </Helmet>
                {showBack ? (
                  <div onClick={categoryAndSearchSwitcher}>
                    {" "}
                    <Link to={`/${option1}`}>
                      <img className="homeIcon" src={home} alt=""/>
                    </Link>
                  </div>
                ) : <div className="buttonDivUpselling">
                <button
                  style={{
                    border: foundPlace.borderButton,
                    color: foundPlace.color,
                  }}
                  className="buttonUpselling buttonSugerencia"
                  onClick={showModal}
                >
                  Sugerencia del día
                </button>
              </div>}
              <div className="languages">
                <div
                  className={lang === "ca" ? "perLanguage-act" : "perLanguage"}
                  onClick={() => setLang("ca")}
                >
                  CA
                </div>
                <div
                  className={lang === "en" ? "perLanguage-act" : "perLanguage"}
                  onClick={() => setLang("en")}
                >
                  EN
                </div>
                <div
                  className={lang === "es" ? "perLanguage-act" : "perLanguage"}
                  onClick={() => setLang("es")}
                >
                  ES
                </div>
              </div>
                <img src={foundPlace.iso} alt="logo" className="isoTipo" />
              <div className="homeAndSearch">
                <div className="search-bar" onClick={() => setBuscar(!buscar)}>
                  {buscar ? (
                    <div className="buscador">
                      <FontAwesomeIcon icon={faAngleLeft} />
                      <p>{lang === "en" ? "Back" : "Volver"}</p>
                    </div>
                  ) : (
                    <div className="buscador">
                      <AiOutlineSearch />
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
                  <Route
                    exact
                    path="/:place"
                    render={(props) => <DivisionList {...props} lang={lang} />}
                  />
                  <Route
                    exact
                    path="/:place/division/:divisionName"
                    render={(props) => <DividedFoodlist {...props} lang={lang} />}
                  />
                  <Route
                    exact
                    path="/:place/division/:divisionName/category/:categoryName"
                    render={(props) => <Foodlist {...props} lang={lang} />}
                  />
                </div>
              )}
            </DataContext.Provider>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default Places;