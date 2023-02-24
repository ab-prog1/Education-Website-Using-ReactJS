import React from "react"
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io';
import { ImLinkedin } from 'react-icons/im';
import "../../common/footer/footer.css"




const Footer = () => {




    return (
        <>

            <div className="container-fluid  text-white-50 footer pt-2 mt-3 bg" >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Get In Touch</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Kiel, Germany</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <span className="btn btn-outline-light btn-social " href=""><i><AiOutlineTwitter /></i></span>
                                <span className="btn btn-outline-light btn-social" href=""><i><GrFacebookOption /></i></span>
                                <span className="btn btn-outline-light btn-social" href=""><i><IoLogoInstagram /></i></span>
                                <span className="btn btn-outline-light btn-social" href=""><i><ImLinkedin /></i></span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Quick Links</h5>
                            <span className="btn btn-link text-white-50" href="">About Us</span>
                            <span className="btn btn-link text-white-50" href="">Contact Us</span>
                            <span className="btn btn-link text-white-50" href="">Our Services</span>
                            <span className="btn btn-link text-white-50" href="">Privacy Policy</span>
                            <span className="btn btn-link text-white-50" href="">Terms & Condition</span>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Our Services</h5>
                            <span className="btn btn-link text-white-50" href="">Classroom Resources</span>
                            <span className="btn btn-link text-white-50" href="">Grammar Guide</span>
                            <span className="btn btn-link text-white-50" href="">Teaching blog</span>
                            <span className="btn btn-link text-white-50" href="">TEFL Courses</span>
                            <span className="btn btn-link text-white-50" href="">Language Schools</span>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Newsletter</h5>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn  py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <span className="border-bottom" href="#">Language School
                                </span>, All Right Reserved.
                                Designed By <span className="border-bottom" href="">ab-prog1</span>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    Distributed By <span className="border-bottom" href="https://themewagon.com" target="_blank">ab-prog1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>



    );
}

export default Footer;