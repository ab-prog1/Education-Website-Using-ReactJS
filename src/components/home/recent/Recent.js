import React from "react"
import "../recent/recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding background'>
        <div className='container'>
        <div className="text-center  title">
          <h2>Discover the best way to learn English</h2>
          <p >Learn from locals. Our community of learners supports each other with helpful feedback to build solid knowledge and the confidence to connect in the real world. Feel ready for everyday interactions with help from fluent English speakers.</p>
        </div>
         
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
