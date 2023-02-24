import React from "react"
import { team } from "../../data/Data";
import "./team.css"
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io';

const Team = () => {
    return (
        <div className="container-xxl py-5  ">
        <div className="container  ">
            <div className="text-center mx-auto mb-5 "  style={{maxWidth: "600px"}}>
                <h1 className="mb-3  mt-5 titel">Property Agents</h1>
                <p>start in January with possibility long term contract (several schoolyears) 18 hours class from Monday to Thursday teaching primary kids and teens.</p>
            </div>
            <div className="row g-4">
            {team.map((items, index) => (
                <div className="col-lg-3 col-md-6 " key={index}>
                    <div className="team-item rounded overflow-hidden">
                        <div className="position-relative">
                            <img className="img-fluid" src={items.cover} alt=""/>
                            <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                <span className="btn btn-square mx-1" href="#"><GrFacebookOption/></span>
                                <span className="btn btn-square mx-1" href="#"><AiOutlineTwitter/></span>
                                <span className="btn btn-square mx-1" href="#"><IoLogoInstagram/></span>
                            </div>
                        </div>
                        <div className="text-center p-4 mt-3">
                            <h5 className="fw-bold mb-0">{items.name}</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                ))}
                </div>
        </div>
    </div>
    )
}

export default Team