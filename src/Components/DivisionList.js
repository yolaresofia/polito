import React, { useContext, useEffect } from "react";
import { DataContext } from "../Context/Context";
import Division from "./Division";
import { Link,useNavigate } from "react-router-dom";
import olita from "./../Assets/olita.png";

const DivisionList = () => {
  const { foundPlace, lang } = useContext(DataContext);
  // redirect to homepage
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    navigate("/"); // Redirect to the homepage
  }, [navigate]);

  const divisions = foundPlace.divisiones;
  return (
    <div className="centered fadeIn">
      <div className="list-add">
        <ul className="list-food categoria">
          {divisions.map((division, index) => {
            return (
              <Link
                style={{ color: foundPlace.color }}
                key={index}
                to={`${foundPlace.place}/division/${division.url}`}
              >
                <img className="olita" src={olita} alt="" />
                <Division {...division} lang={lang} />
              </Link>
            );
          })}
        </ul>
        <img className="olita" src={olita} alt="" />
      </div>
    </div>
  );
};

export default DivisionList;
