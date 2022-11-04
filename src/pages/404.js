import * as React from "react"
import Seo from "../components/seo"
import Spline from '@splinetool/react-spline'
import { Link } from "gatsby"


const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <Link to="/">
    <div className="page404">
    <Spline scene="https://prod.spline.design/CKa-a2huFYqqDoKd/scene.splinecode"/>
    </div>
    </Link>
  </>
)

export default NotFoundPage
