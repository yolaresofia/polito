import React, { useContext, useEffect } from "react";
import { DataContext } from "../Context/Context";
import Division from "./Division";
import { Link,useNavigate } from "react-router-dom";

const DivisionList = () => {
  const { foundPlace, lang } = useContext(DataContext);
  // redirect to homepage
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    navigate("/"); // Redirect to the homepage
  }, [navigate]);

  const divisions = foundPlace.divisiones;
  return (
    <div className="fadeIn">
      <div className="list-add">
        <ul className="list-food categoria">
          {divisions.map((division, index) => {
            return (
              <Link
                style={{ color: foundPlace.color }}
                key={index}
                to={`${foundPlace.place}/division/${division.url}`}
              >
                <Division {...division} lang={lang} />
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DivisionList;
