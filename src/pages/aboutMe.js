import * as React from "react"
import "../styles/main.scss"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Scene from "../components/3DModel"



const AboutMe = () => (
  <div>
    <Seo title="About Me" />
    <Link to="/">
      <nav className="navigation hoverable">
        <button className="navigationButton">home</button>
      </nav>
    </Link>
    <Scene />
  </div>
)

export default AboutMe
