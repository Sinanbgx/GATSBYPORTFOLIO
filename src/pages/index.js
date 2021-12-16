import * as React from "react"


import "../styles/main.scss"
import Seo from "../components/seo"
import ProjectSlider from "../components/projectslider"
import HomePage from "../components/homepage"
import MbProjects from "../components/mobileProjects"



const IndexPage = () => (
  
  <div>
    <Seo title="Home" />
    <div className="mainContent">
    <HomePage/>
    <ProjectSlider/>
    </div>
    <MbProjects/>
    </div> 
)

export default IndexPage
