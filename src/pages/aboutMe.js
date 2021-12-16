import * as React from "react"
import "../styles/main.scss"
import { Link } from "gatsby"
import AboutMeS from "../components/aboutmeS"
import Seo from "../components/seo"

const AboutMe = () => (
  <div>
    <Seo title="About Me" />
    <Link to="/">
      <nav className="navigation hoverable">
        <button className="navigationButton">home</button>
      </nav>
    </Link>
    <AboutMeS />
  </div>
)

export default AboutMe
