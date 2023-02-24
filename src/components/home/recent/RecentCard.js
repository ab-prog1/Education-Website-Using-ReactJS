import React, { useEffect } from "react";
import { list } from "../../data/Data";
import "../recent/recent.css";
import Aos from "aos";
import "aos/dist/aos.css"
import { NavLink } from "react-router-dom";



const RecentCard = () => {

  useEffect(() =>{
    Aos.init ({duration:1500});
  })
  return (
    <>
        
      <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500" className="container pt-5">
        <div className="container grid g-4   justify-content-between  ">
          {list.map((val, index) => {
            const { cover, CardTitle } = val;
            return (
                <div className="card property-item " key={index} style={{ width: "23rem" }}>
                  <img
                    src={cover}
                    className="card-img-top"
                    alt="Chicago Skyscrapers"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{CardTitle}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                  </div>
                  <ul className="list-group list-group-light list-group-small">
                    <li className="list-group-item px-4">Cras justo odio</li>
                    <li className="list-group-item px-4">
                      Dapibus ac facilisis in
                    </li>
                    <li className="list-group-item px-4">Vestibulum at eros</li>
                  </ul>
                  <div className="card-body">
                    <NavLink to="#" className="card-link">
                      Card link
                    </NavLink>
                    <NavLink to="#" className="card-link">
                      Another link
                    </NavLink>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
         


    </>
  );
};

export default RecentCard;
