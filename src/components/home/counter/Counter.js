import React from "react"
import "./counter.css"
import  { useCountUp } from 'react-countup';





const Counter = () => {
   

    const SimpleHook = () => {
        useCountUp({ ref: 'count-clients ', end: 9434 });
        useCountUp({ ref: 'count-Projects', end: 201 });
        useCountUp({ ref: 'count-Support', end: 150 });
        useCountUp({ ref: 'count-Workers', end: 1500 });         
      
    }

    SimpleHook()

    return ( 
        <>
        
        <section id="counts" className="counts ">
      <div className="container position-relative">

        <div className="text-center title">
          <h3>What we have achieved so far</h3>
          <p>
Learn English online for free with Busuu
Get ready for real-world interactions in English with support from our online community of native speakers.</p>
        </div>

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
      
          <span  id="count-clients "  className="purecounter"></span>
            <p>Student</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span id="count-Projects" className="purecounter"></span>
            <p>Teacher</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span id="count-Support" className="purecounter"></span>
            <p>Employee</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span id="count-Workers" className="purecounter"></span>
            <p>Translator</p>
          </div>

        </div>

      </div>
      
    </section>
      
        </>
     );
}

 
export default Counter;