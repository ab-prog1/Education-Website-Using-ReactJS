import React, { useState } from "react"
import "./search.css"
import { AiOutlineMinus, AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';


const Search = () => {

  const [showInfo, setShowInfo] = useState(false);


  return (

    <div className="card-search">
      <div className=" container search-box">
        <form className="row g-3">
          <div className="col-md-3">
            <input type="email" className="form-control" id="inputEmail4" placeholder="Keyword" />
          </div>
          <div className="col-md-3">
          <select className="form-select" aria-label="Default select example">
              <option value>All Countries</option>
              <option value="1">United Kingdom</option>
              <option value="2">Germany</option>
              <option value="3">France</option>
              <option value="3">Spain</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select" aria-label="Default select example">
              <option value>All Cities</option>
              <option value="1">Berlin</option>
              <option value="2">Hamburg</option>
              <option value="3">München</option>
              <option value="3">Köln</option>
              <option value="3">Stuttgart</option>
              <option value="3">Düsseldorf</option>
            </select>
          </div>
          <div className="col-md-3">

            <select className="form-select" aria-label="Default select example">
              <option value>All Catagories</option>
              <option value="1">English</option>
              <option value="2">German</option>
              <option value="3">French</option>
              <option value="3">Persian</option>
              <option value="3">Arabic</option>
            </select>
          </div>
          
          {
            showInfo &&

            <div className="row g-3 ">
              <div className="col-md-3">

                <select className="form-select " aria-label="Default select example">
                  <option value>Program Type</option>
                  <option value="1">GapYear</option>
                  <option value="2">High School</option>
                  <option value="3">Intern Abroad</option>
                  <option value="3">Language School</option>
                  <option value="3">TEFL Courses </option>
                </select>
              </div>
              <div className="col-md-3">

                <select className="form-select" aria-label="Default select example">
                  <option value>Teacher's Choice</option>
                  <option value="1">Mr. Smith</option>
                  <option value="2">Mrs. Smith</option>
                  </select>
              </div> <div className="col-md-3">

                <select className="form-select" aria-label="Default select example">
                  <option value>Class Type</option>
                  <option value="1">Online</option>
                  <option value="2">Real</option>
                </select>
              </div>
              </div>
          }

          <div className="col-6">
            <label type="button" className=" more-filter " onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
              MORE FILTERS
            </label>
          </div>
          <div className="col-6 search-btn">

            {/* <button type="submit" className=" search-btn   btn-lg" > <AiOutlineSearch/>Search</button> */}
            <a className="btn  btn-outline-danger active" data-bs-toggle="pill" href="#tab-2"><AiOutlineSearch />Search</a>
          </div>
        </form>
      </div>
    </div>

  );
}

export default Search;