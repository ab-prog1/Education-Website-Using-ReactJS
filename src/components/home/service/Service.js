import React from "react"
import "./Service.css"
import ServiceCard from "./ServiceCard"

const Service = () => {
  return (
    <>
      <section className='featured background '>
        <div className='container '>
        <div className="  col-12 text-center titel">
                    <h2 >Discover the best way to learn Languege</h2>
                    <p>Europäischer Bildungsraum.</p>
                </div>
          <ServiceCard />
        </div>
      </section>
    </>
  )
}

export default Service
