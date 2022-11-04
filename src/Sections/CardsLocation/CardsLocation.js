import "./CardsLocation.css";

import { Link } from "react-router-dom";
import { data } from "../../Data/data";
import React from "react";

const CardsLocation = () => {
  return (
    
      <div className="CardsBackground">
        {data.map((logement,index) => (
          <div key={`${logement.title}-${index}`} className="card">
          <Link className="logLink" to={`logement/${logement.id}`} >
            <img src={logement.cover} alt="" />
            <p className="tittleLog">{logement.title}</p>
          </Link>
          </div>
        ))}
      </div>
    
  );
};

export default CardsLocation;
