import React from "react"
import { NavLink, Router  } from "react-router-dom";
import { AiOutlineLogin } from 'react-icons/ai';
import "../../common/header/header.css"
import { useState } from "react";



const Header = () => {
 
  

  const [fix, setFix] = useState(false);

  const setFixed = () => {
   
    if (window.scrollY >= 50 ) {
      setFix(true);
         
        }else
        setFix(false);}
    
     
  

  window.addEventListener("scroll", setFixed)


return (
  <>

     <header  >
        <nav className={fix ? 'navbar active navbar-expand-lg  sub_page nav-item fixed-top' : 'navbar navbar-expand-lg nav-item  fixed-top'}  >
          <div className="container " >
            <NavLink className="navbar-brand mr-5" to="#" ><span href="#" title="Image from freepnglogos.com"><img src='./images/logo.png'  alt="logo " /></span> <span className="nav-item logo">Language <span className="baner ">School</span></span>  </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse  navbar-collapse " id="navbarSupportedContent">

              <ul className="navbar-nav  mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink  className={Router.pathname === '/' ? 'nav-link nav-item active' : 'nav-link  nav-item'} aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link nav-item" to="About">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link nav-item" to="Services"  >Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link nav-item" to="Blog"  >Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link nav-item" to="Contact"  >Contact</NavLink>
                </li>
                </ul>
                <NavLink className="nav-link sub_page_btn br-2" to="Login"  >
              <button className= " btn btn-sm btn-outline-danger sub_btn mr-2"  type="submit" ><AiOutlineLogin /> Login</button>
              </NavLink>
                <NavLink className="nav-link sub_page_btn ml-4" to="Register"  >
              <button className= " btn btn-sm btn-outline-danger sub_btn ml-4"  type="submit" > Register</button>
              </NavLink>
            </div>
          </div>
         
        </nav>
      </header>
 

  </>



);
    }

export default Header;