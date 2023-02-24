import React from "react";
import { featured } from "../../data/Data";
import "./Service.css";

const ServiceCard = () => {
  return (
    <>
      <div className="content grid4 mtop  ">
        {featured.map((items, index) => (
          <div className="cat-item" key={index}>
            <div className="box shadow" >
              <img className="icon cat-item" src={items.cover} alt="" />
              <h4>{items.name}</h4>
              <label>{items.total}</label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceCard;
