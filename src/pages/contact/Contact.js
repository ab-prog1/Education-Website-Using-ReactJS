import React from "react"
import { handleError } from "../../lib/helper";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./contact.css"


const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        console.log(name,email,subject,text);
        e.preventDefault()
        if (name === ''| email === ''| subject === ''| text === '') {
            toast.error("All items on our form are required.")
            return
        }

        try {
            setLoading(true)
         await axios.post("http://localhost:8000/api/contact-us", {
                name,
                email,
                subject,
                text
            })
            toast.success("Your message has been recorded.");
        } catch (err) {
            toast.error(handleError(err))
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
        
   
        <div className="container-xxl  ">
        <div className="container">
            <div className="text-center mt  mx-auto mb-5 " style={{maxWidth: "600px"}}>
                <h1 className="mb-3 mt-90 titel ">Contact Us</h1>
                <p >The TEFL course was designed by professors of the Ontario Institute for Studies in Education (OISE), the education department, at the University of Toronto which ranks 5th in the world for education.</p>
            </div>
            <div className="row g-4">
                <div className="col-12">
                    <div className="row gy-4">
                        <div className="col-md-6 col-lg-4 ">
                            <div className="contact-item rounded p-3">
                                <div className="d-flex align-items-center bg-white rounded p-3" style={{border: "1px dashed  #e93f29"}}>
                                    <div className="icon me-3" style={{width: "45px" , height: "45px"}}>
                                        <i className="fa fa-map-marker-alt text-primary"></i>
                                    </div>
                                    <span>123 Street, Kiel, Germany</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="contact-item rounded p-3">
                                <div className="d-flex align-items-center bg-white rounded p-3" style={{border: "1px dashed #e93f29"}}>
                                    <div className="icon me-3" style={{width: "45px" , height: "45px"}}>
                                        <i className="fa fa-envelope-open text-primary"></i>
                                    </div>
                                    <span>info@example.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="contact-item rounded p-3">
                                <div className="d-flex align-items-center bg-white rounded p-3" style={{border: "1px dashed #e93f29"}}>
                                    <div className="icon me-3" style={{width: "45px" , height: "45px"}}>
                                        <i className="fa fa-phone-alt text-primary"></i>
                                    </div>
                                    <span>+049 345 6789</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 " >
                    <iframe className="position-relative rounded w-100 h-100" title="myFrame"
                        src="https://www.google.com/maps/embed?Kiellinie,+Kiel/@54.3518687,10.1407478,14.66z/data=!4m13!1m7!3m6!1s0x47b2563d3892a693:0x33fa25ffd7579a54!2sKiellinie,+Kiel!3b1!8m2!3d54.353502!4d10.1403125!3m4!1s0x47b2563d3892a693:0x33fa25ffd7579a54!8m2!3d54.353502!4d10.1403125?hl=en"
                         style={{minHeight: "400px", border: "0"}} allowFullScreen="" aria-hidden="false"
                        tabIndex="0"></iframe>
                </div>
                <div className="col-md-6">
                    <div >
                        <p className="mb-4">The TEFL course was designed by professors of the Ontario Institute for Studies in Education (OISE), the education department, at the University of Toronto which ranks 5th in the world for education.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="name" placeholder="Your Name"/>
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="email" placeholder="Your Email"/>
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input onChange={(e) => setSubject(e.target.value)} value={subject} type="text" className="form-control" id="subject" placeholder="Subject"/>
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea onChange={(e) => setText(e.target.value)} value={text} className="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div type="submit" disabled={loading} className="col-12 form-btn">
                                    <button   className="btn  w-100 py-3" type="submit">Send Message
                                    {loading && <div className="spinner-border spinner-border-sm ms-2"></div>}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    </>
    )
}

export default ContactPage