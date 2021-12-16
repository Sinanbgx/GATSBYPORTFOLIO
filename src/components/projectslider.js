import React from "react"
import { gsap, ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import JSONData from "../../src/content/data.json"

// import {getImage} from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
// import * as THREE from 'three'


function ProjectSlider() {

  const data = useStaticQuery(
    graphql`
      query {
        firstProjectImage: file(relativePath: { eq: "nilsB.png" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [WEBP]
            )
          }
        }
        secondProjectImage: file(relativePath: { eq: "dayWorker.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [WEBP]
            )
          }
        }
        thirdProjectImage: file(relativePath: { eq: "videoCoaching.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [WEBP]
            )
          }
        }
        fourthProjectImage: file(relativePath: { eq: "wscBau.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [WEBP]
            )
          }
        }
        fifthProjectImage: file(relativePath: { eq: "uxBulgaria.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [WEBP]
            )
          }
        }
        sixthProjectImage: file(relativePath: { eq: "UCNAmb.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [WEBP]
            )
          }
        }
      }
    `
  )

  const imageData = data.firstProjectImage.childImageSharp.gatsbyImageData
  const bgImage = convertToBgImage(imageData)

  const imageData2 = data.secondProjectImage.childImageSharp.gatsbyImageData
  const bgImage2 = convertToBgImage(imageData2)

  const imageData3 = data.thirdProjectImage.childImageSharp.gatsbyImageData
  const bgImage3 = convertToBgImage(imageData3)

  const imageData4 = data.fourthProjectImage.childImageSharp.gatsbyImageData
  const bgImage4 = convertToBgImage(imageData4)

  const imageData5 = data.fifthProjectImage.childImageSharp.gatsbyImageData
  const bgImage5 = convertToBgImage(imageData5)

  const imageData6 = data.sixthProjectImage.childImageSharp.gatsbyImageData
  const bgImage6 = convertToBgImage(imageData6)

  function projectLink() {
    window.open(JSONData.NilsB.link)
  }
  function projectLink2() {
    window.open(JSONData.DayWorker.link)
  }
  function projectLink3() {
    window.open(JSONData.VideoCoaching.link)
  }
  function projectLink4() {
    //local
    window.open(JSONData.WSCBAU.link)
  }
  function projectLink5() {
    //local
    window.open(JSONData.UXBulgaria.link)
  }
  function projectLink6() {
    //local
    window.open(JSONData.UCNAmbassadors.link)
  }

  const scrollContainerRef = useRef(null)
  // const mainContentRef = useRef(null)

  const projectInfoRef = useRef(null)
  const titleLinkRef = useRef(null)

  const projectInfoRef2 = useRef(null)
  const titleLinkRef2 = useRef(null)

  const projectInfoRef3 = useRef(null)
  const titleLinkRef3 = useRef(null)

  const projectInfoRef4 = useRef(null)
  const titleLinkRef4 = useRef(null)

  const projectInfoRef5 = useRef(null)
  const titleLinkRef5 = useRef(null)

  const projectInfoRef6 = useRef(null)
  const titleLinkRef6 = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const scrollContainer = scrollContainerRef.current

    const projectInfo = projectInfoRef.current
    const titleLink = titleLinkRef.current

    const projectInfo2 = projectInfoRef2.current
    const titleLink2 = titleLinkRef2.current

    const projectInfo3 = projectInfoRef3.current
    const titleLink3 = titleLinkRef3.current

    const projectInfo4 = projectInfoRef4.current
    const titleLink4 = titleLinkRef4.current

    const projectInfo5 = projectInfoRef5.current
    const titleLink5 = titleLinkRef5.current

    const projectInfo6 = projectInfoRef6.current
    const titleLink6 = titleLinkRef6.current
    // const mainContent = mainContentRef.current


    
    // scrollContainer.addEventListener("mousewheel", function() {
    //   gsap.to(containers,{
    //     attr:{"baseFrequency":1},
    //     duration: 2
    //   })
    // });
   
    let containers = [
      ...document.querySelectorAll(".mainContent__projectContainer"),
    ]
    gsap.to('.mainContent__projectInfo', {
      "display": "block"
    })
    gsap.to('.mainContent__titleLink', {
      "display": "flex"
    })
    gsap.fromTo(".mainContent__scrollContainer", {x: 200}, {x:0, duration: 0.5, ease: "power1.out"});

    

    let tl = gsap.timeline({
      scrollTrigger: {
        id: "scrollTrigger",
        trigger: ".mainContent",
        pin: true,
        scrub: true,  
        // markers: true,
        start: "top top",
        end: () =>
          scrollContainer.scrollWidth - document.documentElement.clientWidth,

      },
      
    })
    tl.to(containers, {
      x: () =>
        -(scrollContainer.scrollWidth - document.documentElement.clientWidth),
    })


    gsap.to(".onScrollOpacity", {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.07,
        scrub: true,
        toggleActions: "play none none reverse",
      },
      opacity: 0,
    })

    //SCROLL ANIMATION
    //FOR THE FIRST PROJECT
    gsap.from(".first", {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.015,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.12,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0.3,
    })

    gsap.from(projectInfo, {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.015,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.12,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0,
      x: 200,
    })
    gsap.from(titleLink, {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.015,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.12,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0,
      y: -100,
    })

    //SCROLL ANIMATION
    //FOR THE SECOND PROJECT
    gsap.from(".second", {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.09,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.23,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0.3,
    })

    gsap.from(projectInfo2, {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.09,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.23,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0,
      x: 200,
    })
    gsap.from(titleLink2, {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.09,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.23,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0,
      y: -100,
    })
    //SCROLL ANIMATION
    //FOR THE THIRD PROJECT
    gsap.from(".third", {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.2,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.38,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0.3,
    })

    gsap.from(projectInfo3, {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.2,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.38,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0,
      x: 200,
    })
    gsap.from(titleLink3, {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.2,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.38,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0,
      y: -100,
    })

    //SCROLL ANIMATION
    //FOR THE FOURTH PROJECT
    gsap.from(".fourth", {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.33,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.55,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0.3,
    })

    gsap.from(projectInfo4, {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.33,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.55,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0,
      x: 200,
    })
    gsap.from(titleLink4, {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.33,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.55,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0,
      y: -100,
    })

    //SCROLL ANIMATION
    //FOR THE FIFTH PROJECT
    gsap.from(".fifth", {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.48,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.78,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0.3,
    })

    gsap.from(projectInfo5, {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.48,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.78,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0,
      x: 200,
    })
    gsap.from(titleLink5, {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.48,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.78,
        toggleActions: "play reverse restart reverse",
      },
      opacity: 0,
      y: -100,
    })

    //SCROLL ANIMATION
    //FOR THE SIXTH PROJECT
    gsap.from(".sixth", {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.7,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.9,
        toggleActions: "play none none reverse",
      },
      opacity: 0.3,
    })

    gsap.from(projectInfo6, {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.7,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.9,
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: 200,
    })
    gsap.from(titleLink6, {
      scrollTrigger: {
        trigger: scrollContainer,
        start: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.7,
        end: () =>
          (scrollContainer.scrollWidth - document.documentElement.clientWidth) *
          0.9,
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: -100,
    })
  }, [])

  return (
    <div>
      <section className="mainContent__projects">
        <div ref={scrollContainerRef} className="mainContent__scrollContainer">
          <div className="mainContent__projectContainer first ">
            <div ref={projectInfoRef} className="mainContent__projectInfo">
              <h4 className="mainContent__projectSubTitle">
                {JSONData.NilsB.subTitle}
              </h4>
              <p className="mainContent__projectDescription">
                {JSONData.NilsB.description}
              </p>
            </div>
            <div className="mainContent__projectImageTitleLink">
              <BackgroundImage
                Tag="div"
                className="mainContent__projectImage"
                 // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
              ></BackgroundImage>
              <div ref={titleLinkRef} className="mainContent__titleLink">
                <h3 className="mainContent__projectTitle">
                  {JSONData.NilsB.title}
                </h3>

                <button
                  className="mainContent__projectLink"
                  onClick={projectLink}
                >
                  VISIT
                </button>
              </div>
            </div>
          </div>
          <div className="mainContent__projectContainer second ">
            <div ref={projectInfoRef2} className="mainContent__projectInfo">
              <h4 className="mainContent__projectSubTitle">
                {JSONData.DayWorker.subTitle}
              </h4>
              <p className="mainContent__projectDescription">
                {JSONData.DayWorker.description}
              </p>
            </div>
            <div className="mainContent__projectImageTitleLink">
              <BackgroundImage
                Tag="div"
                className="mainContent__projectImage"
                // Spread bgImage into BackgroundImage:
      {...bgImage2}
      preserveStackingContext
              ></BackgroundImage>
              <div ref={titleLinkRef2} className="mainContent__titleLink">
                <h3 className="mainContent__projectTitle">
                  {JSONData.DayWorker.title}
                </h3>

                <button
                  className="mainContent__projectLink"
                  onClick={projectLink2}
                >
                  VISIT
                </button>
              </div>
            </div>
          </div>
          <div className="mainContent__projectContainer third ">
            <div ref={projectInfoRef3} className="mainContent__projectInfo">
              <h4 className="mainContent__projectSubTitle">
                {JSONData.VideoCoaching.subTitle}
              </h4>
              <p className="mainContent__projectDescription">
                {JSONData.VideoCoaching.description}
              </p>
            </div>
            <div className="mainContent__projectImageTitleLink">
              <BackgroundImage
                Tag="div"
                className="mainContent__projectImage"
                // Spread bgImage into BackgroundImage:
      {...bgImage3}
      preserveStackingContext
              ></BackgroundImage>
              <div ref={titleLinkRef3} className="mainContent__titleLink">
                <h3 className="mainContent__projectTitle">
                  {JSONData.VideoCoaching.title}
                </h3>

                <button
                  className="mainContent__projectLink"
                  onClick={projectLink3}
                >
                  VISIT
                </button>
              </div>
            </div>
          </div>
          <div className="mainContent__projectContainer fourth ">
            <div ref={projectInfoRef4} className="mainContent__projectInfo">
              <h4 className="mainContent__projectSubTitle">
                {JSONData.WSCBAU.subTitle}
              </h4>
              <p className="mainContent__projectDescription">
                {JSONData.WSCBAU.description}
              </p>
            </div>
            <div className="mainContent__projectImageTitleLink">
              <BackgroundImage
                Tag="div"
                className="mainContent__projectImage"
                // Spread bgImage into BackgroundImage:
      {...bgImage4}
      preserveStackingContext
              ></BackgroundImage>
              <div ref={titleLinkRef4} className="mainContent__titleLink">
                <h3 className="mainContent__projectTitle">
                  {JSONData.WSCBAU.title}
                </h3>

                <button
                  className="mainContent__projectLink"
                  onClick={projectLink4}
                >
                  VISIT
                </button>
              </div>
            </div>
          </div>
          <div className="mainContent__projectContainer fifth ">
            <div ref={projectInfoRef5} className="mainContent__projectInfo">
              <h4 className="mainContent__projectSubTitle">
                {JSONData.UXBulgaria.subTitle}
              </h4>
              <p className="mainContent__projectDescription">
                {JSONData.UXBulgaria.description}
              </p>
            </div>
            <div className="mainContent__projectImageTitleLink">
              <BackgroundImage
                Tag="div"
                className="mainContent__projectImage"
                // Spread bgImage into BackgroundImage:
      {...bgImage5}
      preserveStackingContext
              ></BackgroundImage>
              <div ref={titleLinkRef5} className="mainContent__titleLink">
                <h3 className="mainContent__projectTitle">
                  {JSONData.UXBulgaria.title}
                </h3>

                <button
                  className="mainContent__projectLink"
                  onClick={projectLink5}
                >
                  VISIT
                </button>
              </div>
            </div>
          </div>
          <div className="mainContent__projectContainer sixth ">
            <div ref={projectInfoRef6} className="mainContent__projectInfo">
              <h4 className="mainContent__projectSubTitle">
                {JSONData.UCNAmbassadors.subTitle}
              </h4>
              <p className="mainContent__projectDescription">
                {JSONData.UCNAmbassadors.description}
              </p>
            </div>
            <div className="mainContent__projectImageTitleLink">
              <BackgroundImage
                Tag="div"
                className="mainContent__projectImage"
                // Spread bgImage into BackgroundImage:
      {...bgImage6}
      preserveStackingContext
              ></BackgroundImage>
              <div ref={titleLinkRef6} className="mainContent__titleLink">
                <h3 className="mainContent__projectTitle">
                  {JSONData.UCNAmbassadors.title}
                </h3>

                <button
                  className="mainContent__projectLink"
                  onClick={projectLink6}
                >
                  VISIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectSlider
