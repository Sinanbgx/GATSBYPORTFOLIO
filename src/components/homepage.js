import React from "react"
import { Link } from "gatsby"

function Homepage() {

    
  return (
    <div>
      <Link to="/aboutMe/"> 
        <nav className="navigation ">
          <button className="navigationButton">about me</button>
        </nav>
      </Link>
      <div className="mainContent__scrollCTA mainContent--Animate onScrollOpacity">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.27 68.061"
        >
          <g id="Group_2" data-name="Group 2" transform="translate(-1027 -399)">
            <g
              id="Rectangle_2"
              data-name="Rectangle 2"
              transform="translate(1027 399)"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
            >
              <rect width="42.27" height="68.061" rx="21.135" stroke="none" />
              <rect
                x="1.5"
                y="1.5"
                width="39.27"
                height="65.061"
                rx="19.635"
                fill="none"
              />
            </g>
            <g
              id="Group_3"
              data-name="Group 3"
              transform="translate(-1 -0.285)"
            >
              <g
                id="Rectangle_3"
                data-name="Rectangle 3"
                transform="translate(1042.045 404.731)"
                fill="none"
                stroke="#fff"
                strokeWidth="3"
              >
                <rect width="13.772" height="30.785" rx="6.886" stroke="none" />
                <rect
                  x="1.5"
                  y="1.5"
                  width="10.772"
                  height="27.785"
                  rx="5.386"
                  fill="none"
                />
              </g>
              <g
                id="Group_1"
                data-name="Group 1"
                transform="translate(1043.346 406.757)"
              >
                <line
                  id="Line_1"
                  data-name="Line 1"
                  y2="52.319"
                  transform="translate(5.586)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M1055.191,455.191l-5.586-5.586"
                  transform="translate(-1049.605 -402.872)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M1049.605,455.191l5.586-5.586"
                  transform="translate(-1043.934 -402.872)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
              </g>
            </g>
          </g>
        </svg>
        <p className="mainContent__scrollCTAtext">scroll to continue</p>
      </div>
      <section className="mainContent__titleSection mainContent--Animate onScrollOpacity">
        <h1 className="mainContent__title mainContent--Animate">Sinan Mehmed</h1>
        <h2 className="mainContent__subTitle mainContent--Animate">
          Front-end Developer and 3D Artist
        </h2>
      </section>
      <div className="mainContent__spacer">
       </div>
    </div>
  )
}

export default Homepage
