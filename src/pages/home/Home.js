import React from "react"
import Intro from "../../components/home/intro/Intro"
import Service from "../../components/home/service/Service"
import Search from "../../components/home/search/Search"
import Counter from "../../components/home/counter/Counter"
import Recent from "../../components/home/recent/Recent"
import Blog from "../../components/home/blog/Blog"
import Team from "../../components/home/team/Team"
import About from "../../components/home/about/About"





const HomePage = () => {
  return (
    <>
      <Intro />
      <Search />
      <Service />
      <Counter />
      <Recent />
      <Blog />
      <Team />
      <About />
      </>
  )
}

export default HomePage
