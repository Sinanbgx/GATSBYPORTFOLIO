import * as React from "react"
import "../styles/main.scss"
import { Link } from "gatsby"
import Seo from "../components/seo"

const AboutMe3D = () => (
  <div>
    <Seo title="About Me" />
    <Link to="/">
      <nav className="navigation hoverable">
        <button className="navigationButton">home</button>
      </nav>
    </Link>
  </div>
)

export default AboutMe3D